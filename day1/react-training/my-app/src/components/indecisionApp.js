import React, { Component } from 'react';
import Header from './header';
import Action from './action';
import Options from './options';
import AddOption from './addOption';
import Footer from './footer';

export default class IndecisionApp extends Component {
    render() {

      const headerTitle = "Put your life in the hands of a computer";
      const footerTitle = "footer goes here";

      return (
        <div>
          <Header title={headerTitle}/>
          <Action />
          <Options />
          <AddOption />
          <Footer title={footerTitle} />
        </div>
      );
    }
  }