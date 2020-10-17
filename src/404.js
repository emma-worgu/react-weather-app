import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const NotFoundPage = () => {
    return (
        <div>
            <Nav />
            <div>
                <h4>This Page is Not Found... Please Click the Home link</h4>
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;