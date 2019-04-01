import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';

export default class Main extends Component{
    render(){
        return(
            <div>
                <h3>Main</h3>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}