import React, { Component } from 'react';
import './App.css';
//import {SkiDayCounter} from './index'

export default class App extends Component{
  
  SkiDayCounter = () => {
    return(<div>
      <p>Total Days: 1</p>
    </div> )
  }
 
  render(){
    return (
      <div>
        <this.SkiDayCounter />
          <p>
            Edit and save to reload.
          </p>
      </div>
    );
  }
}