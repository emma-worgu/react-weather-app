import React from 'react';
import SearchNav from './SearchNav';
import MainNav from './MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';   

function Nav(props) {
    return (
        <div>
            <MainNav/>
            <SearchNav value={props.locality} localHandler={props.localHandler} handleForm={props.handleForm}/>
        </div>
    );
};

export default Nav;