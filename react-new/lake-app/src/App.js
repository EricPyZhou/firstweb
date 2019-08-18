import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({lakes}) =>(
  <ul>
    {
      lakes.map(la => (
        <li key={la.id}>
          {la.name} | {la.trailhead}
        </li>
      ))
    } 
  </ul>
);

export default App;
