import React from 'react';
import './MainNav.css';
import {
  Link,
} from 'react-router-dom';

function MainNav() {
  const MainNavLogic = () => {
    if(window.innerWidth < 1024) {
      return(
      <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#home-page">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className ="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    } else {
      return(
        <div className="desktop-view container-fluid">
          <ul className="desktop-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      );
    };
  };
    return(
        <div>
          {MainNavLogic()}  
        </div>
    );
};

export default MainNav;