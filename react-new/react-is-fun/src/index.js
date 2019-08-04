import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let skiData = {
    total: 50,
    power:20,
    backcountry:10,
    goal:100
}

const SkiDayCounter = ({total}) => {
    return (
        <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
            </section>
    )
} 

/*
class SkiDayCounter extends Component{
    getPercent = decimal =>{
        return (decimal * 100 + '%')
    } 
    render(){
        return(
            <div>
                <p>Total Days: {this.props.total}</p>
            </div>
        )
    }
}

// the inner curly brace is for the object declaration

class Message extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{color: this.props.color}}>
                    Hello everyone</h1>
                <h1>{this.props.msg}</h1>
            </div>
        )
    }
}
*/

render(
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcountry={skiData.backcountry}
        goa={skiData.goal}
    />,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
