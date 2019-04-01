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

    this.state = {
      options: ["One", "Two", "Three"]
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

  render() {

    const headerTitle = "Indecision";
    const footerTitle = "footer goes here";

    return (
      <div>
        <Header title={headerTitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption />
        <Footer title={footerTitle} />
      </div>
    );
  }
}