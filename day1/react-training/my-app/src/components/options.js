import React, { Component } from 'react'
import Option from './option';

export default class Options extends Component {
    render() {
      return (
        <div>
          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {
            this.props.options.map((option)=> <Option key={option} optionText={option} />)
          }
          <Option />
        </div>
      );
    }
  }