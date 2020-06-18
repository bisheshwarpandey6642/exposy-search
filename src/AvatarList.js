





import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Demo.css'
import 'tachyons'

const AvatartList = (props) =>
{
    return(<div class = "namee ma4 bg-light-purple dib pa4 tc">
        <img src= {'https://joeschmoe.io/api/v1/${props.id}'} alt="Avatar" /> 
<h1>{props.name}</h1>
<p>{props.work}</p>
   
    </div>
    )
}


export default AvatartList;