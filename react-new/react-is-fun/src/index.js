import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ele from './Ele';
import * as serviceWorker from './serviceWorker';
/*
const appp = (
    <div>
        <p>This is a title</p>
        <SkiDayCounter>
            {console.log("inside")}
            <div>
                <p>this is test</p>
            </div>
            <Ele />
            <App />
        </SkiDayCounter>
    </div>
)
*/



ReactDOM.render(<App />,document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
