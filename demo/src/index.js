import React, {Component} from 'react'
import {render} from 'react-dom'

import './index.css';
import InputSelect from '../../src';

class Demo extends Component {
  constructor() {
    super();
    this.options = []

    for(let i=0, len=100; i<len; i++)
      this.options.push({
        label: "Option " + (i+1),
        value: "option-" + (i+1)
      });
  }

  handleSelect = (option) => {
    console.log('selected', option);
  }

  render() {
    return <div className="demo-inner">
      <h1>react-input-select Demo</h1>
      <InputSelect
        onSelect={this.handleSelect}
        options={this.options}
        autoFocus
        collapseOnBlur={true}
        noOptions={<div className="no-options">No options!</div>}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
