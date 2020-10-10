import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';   

function Nav() {
    return (
        <div>
            <nav className="nav bg-success">
                <div className="container">
                    <p className="searchPara">Search for weather in your locality</p>
                    <input className="form-control" type="text" placeholder="EX.Lagos"/>
                    <button type="submit" className="btn btn-warning">Search</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;