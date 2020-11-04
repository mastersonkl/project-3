import React from 'react';
import './Navbar.css';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <div className="ui menu">
                <a className="item">
                <Link to={'/search'}><i className="huge meh icon"></i></Link>
                </a>
                <div className="item right">
                    <div className="ui compact menu">
                    <div className="ui simple dropdown item">
                        User's Name
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">
                            
                            <Link to={'/review'}>Write a review!</Link>
                                
                            </div>
                            <div className="item">Saved Reviews</div>
                            <div className="item">Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

};

export default Navbar;