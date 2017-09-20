import React, {Component} from 'react'
import {render} from 'react-dom'

import './index.css';
import InputSelect from '../../src';

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      openUp: false,
      disableEnter: true,
      collapseOnBlur: true, //Boolean
      collapseOnEscape: true, //Boolean 
      collapseOnSelect: true, //Boolean
      selected: {}
    }

    this.options = []

    for(let i=0, len=100; i<len; i++)
      this.options.push({
        label: "Option " + (i+1),
        value: "option-" + (i+1)
      });
  }

  manipState = (state, key, value) => {
    return Object.assign({}, this.state, {
      [key]: value
    });
  }

  handleChange = (key) => {
    let state = this.manipState(this.state, key, !this.state[key]);
    this.setState(state);
  }

  handleSelect = (option) => {
    let state = this.manipState(this.state, 'selected', option);
    this.setState(state);
  }


  render() {
    return <div className="demo-inner">
      <h1>react-select-input Demo</h1>
      <InputSelect
        onSelect={this.handleSelect}
        options={this.options}
        autoFocus={false}
        openUp={this.state.openUp}
        disableEnter={this.state.disableEnter}
        collapseOnBlur={this.state.collapseOnBlur}
        collapseOnEscape={this.state.collapseOnEscape}
        collapseOnSelect={this.state.collapseOnSelect}
      />
      <div className="selection">
        Selection label: <strong>{this.state.selected.label || "none"}</strong>, value: <strong>{this.state.selected.value || "none" }</strong>
      </div>
      <div className="options">
        <label>
          <input type="checkbox" checked={this.state.openUp} onChange={this.handleChange.bind(this, 'openUp')} />
          Open Up
        </label>
        <label>
          <input type="checkbox" checked={this.state.disableEnter} onChange={this.handleChange.bind(this, 'disableEnter')} />
          Disable enter
        </label>
        <label>
          <input type="checkbox" checked={this.state.collapseOnBlur} onChange={this.handleChange.bind(this, 'collapseOnBlur')} />
          Collapse on blur
        </label>
        <label>
          <input type="checkbox" checked={this.state.collapseOnEscape} onChange={this.handleChange.bind(this, 'collapseOnEscape')} />
          Collapse on escape
        </label>
        <label>
          <input type="checkbox" checked={this.state.collapseOnSelect} onChange={this.handleChange.bind(this, 'collapseOnSelect')} />
          Collapse on select
        </label>
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
