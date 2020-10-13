import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function MainNav() {
  const MainNavLogic = () => {
    if(window.innerWidth < 1024) {
      return(
        <Switch>
          <Router>
            <div className="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#home-page">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" id="home-page" href="#home-page">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </Router>
        </Switch>
      );
    } else {
      return(
        <div className="container-fluid">
          <h4>You are Viewing this in a PC</h4>
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