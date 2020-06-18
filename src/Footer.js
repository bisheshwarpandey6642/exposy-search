import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Demo.css'
// import About from './About.js';
import 'tachyons'
import {Link} from 'react-router-dom';

const Footer = () =>
{
   return (<div className = "Demo">
            <ul>
        <li className = "DemoL"><p>footer</p></li>
       
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
export default Footer;