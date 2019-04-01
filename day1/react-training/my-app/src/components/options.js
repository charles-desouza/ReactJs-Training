import React, { Component } from 'react'
import Option from './option';

export default class Options extends Component {
    render() {
      return (
        <div>
          {
            this.props.options.map((option)=> <Option key={option} optionText={option} />)
          }
          <Option />
        </div>
      );
    }
  }