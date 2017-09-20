import React, {Component} from 'react'

import './index.css';
import Textarea from 'react-autosize-textarea';

export default class InputSelect extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      value: null,
      currentOption: -1,
      selectedOption: null,
      searchMatchOptions: []
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  componentDidUpdate() {
    if(this.props.openUp && this.state.currentOption===-1 && this.state.isOpen && !this.state.selectedOption) {
      this.options.scrollTop = this.options.scrollHeight;
    }
    else if(this.props.openUp && this.state.selectedOption && this.state.isOpen) {
      this["option-" + this.state.selectedOption].scrollIntoViewIfNeeded(true);
    }
  }

  /*
    Various renderers
  */

  renderOptions = (options) => {
    return options && options.length > 0 ?
      options.map((option, index) => {
        return (
          <div 
            className={"ris-option" + (this.state.selectedOption===option[this.props.valueKey] ? " selected" : "") + (this.state.currentOption===index ? " current" : "")} 
            key={`${this.props.key}-option-${index}`} 
            onClick={this.handleClick.bind(this, index)}
            ref={ref => this["option-" + option[this.props.valueKey]] = ref}
          >
            {option[this.props.labelKey]}
          </div>
        )
      })
    :
      null
  }

  /*
    Handle different events
  */

  handleSelect = (option, index) => {
    let state = this.manipState(this.state, 'value', option[this.props.labelKey]);
    state = this.manipState(state, 'selectedOption', option[this.props.valueKey]);
    state = this.manipState(state, 'currentOption', -1);
    if(this.props.collapseOnSelect)
      state = this.setIsOpen(state, false);
    this.setState(state);

    if(this.isFunction(this.props.onSelect))
      this.props.onSelect(option);
  }

  handleClick = (index, event) => {
    let option = this.pickOption(index);
    this.handleSelect(option, index);
  }

  handleChange = (event) => {
    let state = this.manipState(this.state, 'value', event.target.value)
    state = this.manipState(state, 'searchMatchOptions', this.matchingOptions(this.props.options, event.target.value));
    state = this.setIsOpen(state, true);

    if(!state.value) {
      state = this.manipState(state, 'currentOption', -1);
      state = this.manipState(state, 'selectedOption', null);
    }
    
    this.setState(state);
  }

  handleFocus = (event) => {
    let state = this.setIsOpen(this.state, true);
    state = this.manipState(state, 'searchMatchOptions', this.matchingOptions(this.props.options, event.target.value));
    this.setState(state);

    if(this.isFunction(this.props.onFocus))
      this.props.onFocus(event);
  }

  handleBlur = (event) => {
    if(this.props.collapseOnBlur) {
      let state = this.setIsOpen(this.state, false);
      this.setState(state);
    }

    if(this.isFunction(this.props.onBlur))
      this.props.onBlur(event);
  }

  handleKeyUp = (event) => {
    if(event.key==="Enter" && this.state.currentOption>-1) {
      this.handleSelect(this.pickOption())
    }

    if(event.key==="Escape" && this.props.collapseOnEscape) {
      this.setState(this.setIsOpen(this.state, false));
    }

    if(this.isFunction(this.props.onKeyUp))
      this.props.onKeyUp(event);
  }

  handleKeyDown = (event) => {
    if(event.key==="Enter" && this.props.disableEnter)
      event.preventDefault();

    if(event.key==="Escape" && this.props.collapseOnEscape) {
      let state = this.setIsOpen(this.state, false)
      this.setState(state);
    }

    this.handleOptionNavigation(event);

    if(this.isFunction(this.props.onKeyDown))
      this.props.onKeyDown(event);
  }

  handleOptionNavigation = (event) => {
    let state = {};
    let currentOption = this.state.currentOption;
    
    if(event.key==="ArrowUp" || event.key==="ArrowDown" && this.disableEnter)
      event.preventDefault();

    if(event.key==="ArrowUp" && currentOption===-1 && this.props.openUp)
        currentOption = this.state.searchMatchOptions.length;

    if(this.props.openUp) {
      if(event.key==="ArrowDown")
        if(currentOption>-1)
          currentOption++;
        else
          currentOption = -1;
      else if(event.key==="ArrowUp")
        currentOption--;
    }
    else {
      if(event.key==="ArrowDown")
        currentOption++;
      else if(event.key==="ArrowUp")
        currentOption--;
    }

    if(currentOption<-1)
      currentOption=-1
    else if(currentOption>this.state.searchMatchOptions.length - 1 && !this.props.openUp)
      currentOption = this.state.searchMatchOptions.length - 1;
    else if(currentOption>this.state.searchMatchOptions.length -1 && this.props.openUp)
      currentOption = -1;

    state = this.manipState(this.state, 'currentOption', currentOption);
    let optionRef = currentOption > -1 ? this["option-" + this.state.searchMatchOptions[currentOption][this.props.valueKey]] : null;
    if(optionRef)
      optionRef.scrollIntoViewIfNeeded(false);
      
    this.setState(state);
  }

  /*
    Searching function
  */

  matchingOptions = (options, value) => {
    let searchValue = value.replace(/\s/g,"");
    let searchOptions = [];

    if(options && options.length > 0 && value)
      searchOptions = options.filter((option, index) => {
        let regexp = new RegExp(searchValue, "gi");
        let value = option[this.props.valueKey] || "";
        let label = option[this.props.labelKey] || "";
        return regexp.test(label.replace(/\s/g,"")) || regexp.test(value.replace(/\s/g,""));
      })
    else
      searchOptions = options.slice(0, options.length);
    
    if(this.props.openUp)
      searchOptions.reverse();

    return searchOptions;
  }

  /*
    Various helpers
  */

  pickOption = (index) => {
    index = index!==null && index!==undefined ? index : this.state.currentOption;
    if(index>-1)
      return this.state.searchMatchOptions[index];
    else
      return {
        [this.props.labelKey]: this.input.value
      }
  }

  setIsOpen = (state, show) => {
    return Object.assign({}, state, {
      isOpen: show || false
    });
  }

  manipState = (state, key, value) => {
    return Object.assign({}, state, {
      [key]: value
    });
  }

  isFunction = (obj) => {
    return typeof obj === "function";
  }

  handleOutsideClick = (event) => {
    if(!this.ris.contains(event.target) && this.props.collapseOnBlur)
      this.setState(this.setIsOpen(this.state, false));
  }

  render() {
    return (
      <div 
        className={"ris" + (this.props.openUp ? " ris-open-up" : "") + (this.props.className ? " " + this.props.className : "")}
        key={"ris-" + this.props.key}
        ref={ref => this.ris = ref}
        style={this.props.style}
      >
        <Textarea 
          className="ris-input" 
          value={this.state.value!==null ? this.state.value : this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.props.onBlur}
          onKeyUp={this.handleKeyUp}
          onKeyDown={this.handleKeyDown}
          autoFocus={this.props.autoFocus}
          innerRef={ref => this.input = ref}
        />
        {
          this.state.isOpen ?
            this.state.searchMatchOptions.length > 0 ?
              <div className="ris-options" ref={ref => this.options = ref}>
                {this.renderOptions(this.state.searchMatchOptions)}
              </div>
            :
              this.props.noOptions ?
                <div className="ris-options ris-no-options">
                  {this.props.noOptions}
                </div>
              :
                null
          :
            null
        }
      </div>
    )
  }
}

InputSelect.defaultProps = {
  key: "react-input-select", //String
  style: null, //Object
  ref: null, //Function
  value: "", //String
  valueKey: "value", //String
  labelKey: "label", //String
  placeholder: "Enter text", //String
  className: "", //String
  openUp: false, //Boolean
  disableEnter: true, //Boolean
  collapseOnBlur: true, //Boolean
  collapseOnEscape: true, //Boolean 
  collapseOnSelect: true, //Boolean
  autoFocus: true, //Boolean
  clearable: true, //Boolean - UPCOMING
  options: [], //Array
  onChange: undefined, //Function
  onSelect: undefined, //Function
  onFocus: undefined, //Function
  onBlur: undefined, //Function
  onKeyUp: undefined, //Function
  onKeyDown: undefined, //Function
  noOptions: undefined, //JSX
}


