import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Demo.css'
// import About from './About.js';
import 'tachyons'
import {Link} from 'react-router-dom';

const Demo = () =>
{
   return (<div className = "Demo">
            <ul>
        <li><Link to="/"  className = "DemoL">Home</Link></li>
        <li><Link to= "Contact">SEARCH</Link></li>
        <li><Link to="About">About</Link></li>
            </ul>

   </div>

   )
}
// class Demo extends Component
// {
//     render()
//     {
//         return <div className = "namee"> 
//          <h1>hello world</h1>
//          <p>jello khaogay</p>
//          </div>
//     }
// }
export default Demo;