import React, { Component } from 'react';
import Header from './header';
import Action from './action';
import Options from './options';
import AddOption from './addOption';
import Footer from './footer';

export default class IndecisionApp extends Component {
    render() {

      const headerTitle = "Indecision";
      const footerTitle = "footer goes here";
      const myOptions = ["One", "Two","Three"];

      return (
        <div>
          <Header title={headerTitle}/>
          <Action />
          <Options options={myOptions}/>
          <AddOption />
          <Footer title={footerTitle} />
        </div>
      );
    }
  }