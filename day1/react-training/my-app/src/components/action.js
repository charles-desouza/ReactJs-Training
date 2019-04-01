import React, { Component } from 'react'


export default class Action extends Component {
  callme(){
    console.log("i am called");
  }

    render() {
      return (
        <div>
          <button onClick={this.callme}>What should I do?</button>
        </div>
      );
    }
  }