import * as React from 'react';

import { Route, Link } from "react-router-dom";

import logo from '../../assets/logo.svg';

function Contacts() {
  return (
    <>
      
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link to="/"
            className="App-link"
          >
            Home
          </Link>

        </header>
      </div>
      
    </>
  );
}

export default Contacts;
