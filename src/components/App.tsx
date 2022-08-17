import * as React from 'react';

import { Route, Link } from "react-router-dom";

import './App.css';

import Navbar from './navbar';
import Home from './home';
import Contacts from './contacts';
import Footer from './footer';

function App() {
  return (
    <>
      <Navbar/>

      <Route exact={true} path="/" component={Home}></Route>
      <Route path="/contacts" component={Contacts}></Route>

      <Footer/>
    </>
  );
}

export default App;
