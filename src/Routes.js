import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import About from './About';
import NotFoundPage from './404';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about" component={About} />
                <Route render={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default Routes;