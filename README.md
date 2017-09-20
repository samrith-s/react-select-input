# react-select-input

A simple combination of traditional HTML5 input and select.

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
### Changelogs
- **0.0.6** - Custom value now trims whitespaces before returning.
- **0.0.5** - Custom value now returns the entered value (including spaces) as both label and value.
- **0.0.4** - searchMatchOptions get recomputed when a value is selected.
- **0.0.3** - onSelect now gets triggered when Enter key is pressed without selecting any option.
- **0.0.2** - Arrow navigations now properly trigger enter.
- **0.0.1** - Initial release.
