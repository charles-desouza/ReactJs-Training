import React, { Component } from 'react'


export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    }
  
  handleAddOption(e){
    e.preventDefault();

    const mydata = e.target.elements.option.value.trim();
    this.props.handleAddOption(mydata);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}