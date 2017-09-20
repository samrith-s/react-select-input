# react-input-select

A simple combination of a traditional HTML5 input and select.

### Props
```javascript
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
    clearable: true, //Boolean - NO EFFECT
    options: [], //Array
    onChange: undefined, //Function (event)
    onSelect: undefined, //Function (option)
    onFocus: undefined, //Function (event)
    onBlur: undefined, //Function (event)
    onKeyUp: undefined, //Function (event)
    onKeyDown: undefined, //Function (event)
    noOptions: undefined, //JSX
  }
```
