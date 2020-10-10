import React from 'react';
import './SavedSearched.css';

function SavedSearches() {
    return (
        <div>
            <div className="searched-content container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Previously Searched Report 1</h5>
                                <p>This is one of your Previously Searched weather report. It will be saved for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Previously Searched Report 2</h5>
                                <p>This is one of your Previously Searched weather report. It will be saved for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Previously Searched Report 3</h5>
                                <p>This is one of your Previously Searched weather report. It will be saved for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedSearches;