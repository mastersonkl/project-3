import React from 'react';
import './Navbar.css';

const Navbar = () => {

    return (
        <div>
            <div className="ui menu">
                <a className="item">
                    <i className="huge meh icon"></i>
                </a>
                <div className="item right">
                    <div class="ui compact menu">
                    <div class="ui simple dropdown item">
                        User's Name
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item">Write a review!</div>
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
