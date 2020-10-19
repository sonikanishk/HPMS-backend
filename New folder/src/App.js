import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from'./components/ContactUs';
import Emergency from'./components/Emergency';
import AboutUs from'./components/AboutUs';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Register from './components/Register';
import Activate from './components/Activate.jsx';
import Login from './components/Login.jsx';
import Private from './components/Private.jsx';
import Signout from './components/SignOut.jsx';

require('dotenv').config({
  path:'../client/cg.env'
})

function App() {
  return (
    <div className="page-element">
        <div style={{flex: "1"}}>
            <Router>
                <Header/>
                <Switch>
                        <Route path="/" exact component = {Home} />
                        <Route path="/contact-us" exact component = {ContactUs} />
                        <Route path="/emergency" exact component = {Emergency} />
                        <Route path="/about-us" exact component = {AboutUs} />
                        <Route path="/register" exact component = {Register} />
                        <Route path="/activate/:token" exact component = {Activate} />
                        <Route path="/login" exact component = {Login} />
                        <Route path="/private" exact component = {Private} />
                        <Route path="/signout" exact component = {Signout} />
                        

                </Switch>
            </Router>
        </div>
      <Footer/>
    </div>
  );
}

export default App;