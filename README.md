# react-select-input

[![Travis](https://img.shields.io/travis/samrith-s/react-select-input/master.svg)][build]
[![npm package](https://img.shields.io/npm/v/react-select-input.svg)][npm]
[![GitHub license](https://img.shields.io/github/license/samrith-s/react-select-input.svg)][license]

A simple combination of traditional HTML5 input and select.

## v2 underway!

I've left this project inactive for way too long (`v1.0.0` was launched a year after initial release!). Going through the code, there are a lot of stuff that could be improved. For all the users, the entire project will undergo a complete rewrite. Many of these changes will be breaking, leading up to the release of v2.

**Head over to the [Version 2 thread](https://github.com/samrith-s/react-select-input/issues/2) to know more and discuss!**

### Props Overview

```javascript
InputSelect.defaultProps = {
  uniqueKey: 'react-select-input', //String
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
| uniqueKey        | String  | `"react-select-input"` Unique key for the component.                                          |
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

Copyright &copy; 2018.

[build]: https://travis-ci.org/samrith-s/react-select-input
[npm]: https://www.npmjs.org/package/react-select-input
[license]: https://github.com/samrith-s/react-select-input/blob/master/LICENSE
