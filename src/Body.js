import React from 'react';
import './body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SavedSearches from './SavedSearches';

function Body() {
    return(
        <div>
            <div className="main-content container">
                <div className="row">
                    <div className="col-9">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Weather in Your Locality</h5>
                                <p>This is Weather in your Locality</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h5>This is the other Part of the row</h5>
                    </div>
                </div>
            </div>
            <SavedSearches/>
        </div>
    );
};

export default Body