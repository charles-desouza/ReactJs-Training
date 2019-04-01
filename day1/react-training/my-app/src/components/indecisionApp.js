import React, { Component } from 'react';
import Header from './header';
import Action from './action';
import Options from './options';
import AddOption from './addOption';
import Footer from './footer';

export default class IndecisionApp extends Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    }
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("remove called");
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleAddOption(option) {

    if(!option){
      return 'Enter valid value to add item'
    } else if( this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {

    const headerTitle = "Indecision";
    const footerTitle = "footer goes here";

    return (
      <div>
        <Header title={headerTitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption handleAddOption = {this.handleAddOption}/>
        <Footer title={footerTitle} />
      </div>
    );
  }
}