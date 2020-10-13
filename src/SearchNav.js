import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';   

function SearchNav(props) {
    return (
        <div>
            <nav className="nav bg-success">
                <div className="container">
                    <p className="searchPara">Search for weather in your locality</p>
                    <input className="form-control" type="text" placeholder="EX.Lagos" value={props.value} onChange={props.localHandler}/>
                    <button type="submit" className="btn btn-warning" onClick={props.handleForm}>Search</button>
                </div>
            </nav>
        </div>
    );
};

export default SearchNav;