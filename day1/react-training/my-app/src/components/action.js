import React, { Component } from 'react'


export default class Action extends Component {
  callHandle(e){
    e.preventDefault();

    const mydata = e.target.elements.demo.value.trim();

    if(mydata)
      console.log(mydata);
  }

    render() {
      return (
        <div>
          <form onSubmit={this.callHandle}>
          <input type="text" name="demo" />
          <button disabled={!this.props.hasOptions}>Call me</button>
          </form>
        </div>
      );
    }
  }