# react-select-input

A simple combination of traditional HTML5 input and select.

### Props Overview

```javascript
InputSelect.defaultProps = {
  key: 'react-select-input', //String
  style: null, //Object
  value: '', //String
  valueKey: 'value', //String
  labelKey: 'label', //String
  placeholder: 'Enter text', //String
  className: '', //String
  openUp: false, //Boolean
  disableEnter: true, //Boolean
  collapseOnBlur: true, //Boolean
  collapseOnEscape: true, //Boolean
  collapseOnSelect: true, //Boolean
  autoFocus: true, //Boolean
  clearable: true, //Boolean - NO EFFECT
  options: [], //Array
  onSelect: undefined, //Function (option)
  onClear: undefined, // Function
  onChange: undefined, //Function (event)
  onFocus: undefined, //Function (event)
  onBlur: undefined, //Function (event)
  onKeyUp: undefined, //Function (event)
  onKeyDown: undefined, //Function (event)
  noOptions: undefined //JSX
};
```

### Options

| Prop             |  Type   | Default                                                                                       |
| ---------------- | :-----: | --------------------------------------------------------------------------------------------- |
| key              | String  | `"react-select-input"` Unique key for the component.                                          |
| style            | Object  | `null` Any custom inline styles that need to be passed.                                       |
| value            | String  | `""` The value to either populate or control the component.                                   |
| valueKey         | String  | `"value"` The key from your options which you want to use as the value key. Should be unique. |
| labelKey         | String  | `"label"` The key from your options for pretty display of options.                            |
| placeholder      | String  | `"Enter text"` Placeholder for input.                                                         |
| className        | String  | `""` Custom classes apart from the default classes to the wrapper.                            |
| openUp           | Boolean | `false` Whether the select should work as a dropup or dropdown.                               |
| disableEnter     | Boolean | `true` If the default return key behaviour should be preserved.                               |
| collapseOnBlur   | Boolean | `true` Clicking outside the ref should collapse the select.                                   |
| collapseOnEscape | Boolean | `true` While focused, hitting Escape collapse the select.                                     |
| collapseOnSelect | Boolean | `true` Upon selection collapses the select.                                                   |
| autoFocus        | Boolean | `true` On mount, focus the input field.                                                       |
| clearable        | Boolean | `true` Show an icon to clear the entire select.                                               |
| options          |  Array  | `[ ]` Array of options to use while rendering the list.                                       |
| noOptions        |   JSX   | `undefined` JSX to render when no option matches search.                                      |

### Methods

| Prop      | Parameters | Description                                                                                   |
| --------- | :--------: | --------------------------------------------------------------------------------------------- |
| onChange  |   event    | Synthetic event of the input upon change.                                                     |
| onSelect  |   option   | The selected option.<br />Gets triggered during both clicking and arrow navigation selection. |
| onFocus   |   event    | Synthetic event of the input upon focus.                                                      |
| onBlur    |   event    | Synthetic event of the input upon blur. Native function passed.                               |
| onKeyUp   |   event    | Synthetic event of the input upon keyUp.                                                      |
| onKeyDown |   event    | Synthetic event of the input upon keyDown.                                                    |
| onClear   |    none    | A callback after clear if `clearable`.                                                        |

### Changelogs

- **[v1.0.0](https://github.com/samrith-s/react-select-input/releases/tag/v1.0.0)** - Finally released a major version after a year's delay. Default stylesheet is now shipped with the package and importable.
- **[v0.1.1](https://github.com/samrith-s/react-select-input/releases/tag/v0.1.0)** - onClear method added as an addition to onChange to specifically listen when input cleared.
- **[v0.1.0](https://github.com/samrith-s/react-select-input/releases/tag/v0.1.0)** - Implemented `clearable`. Updated default key. Fixed issue with trimming of custom value on return.
- **[v0.0.6](https://github.com/samrith-s/react-select-input/releases/tag/v0.0.6)** - Custom value now trims whitespaces before returning.
- **[v0.0.5](https://github.com/samrith-s/react-select-input/releases/tag/v0.0.5)** - Custom value now returns the entered value (including spaces) as both label and value.
- **[v0.0.4](https://github.com/samrith-s/react-select-input/releases/tag/v0.0.4)** - searchMatchOptions get recomputed when a value is selected.
- **[v0.0.3](https://github.com/samrith-s/react-select-input/releases/tag/v0.0.3)** - onSelect now gets triggered when Enter key is pressed without selecting any option.
- **[v0.0.2](https://github.com/samrith-s/react-select-input/releases/tag/v0.0.2)** - Arrow navigations now properly trigger enter.
- **[v0.0.1](https://github.com/samrith-s/react-select-input/releases/tag/v0.0.1)** - Initial release.
