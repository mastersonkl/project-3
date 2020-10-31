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
                    <div class="ui compact menu">
                    <div class="ui simple dropdown item">
                        User's Name
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">
                            
                            <Link to={'/review'}>Write a review!</Link>
                                
                            </div>
                            <div class="item">Saved Reviews</div>
                            <div class="item">Logout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    );

};

export default Navbar;
