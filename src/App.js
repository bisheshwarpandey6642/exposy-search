import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Demo />
       <Switch>
       <Route path="/" exact component = {Home}/>
       <Route path="/Contact" component = {Contact}/>
       <Route path="/About" component = {About}/>
      
     </Switch>
     <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
