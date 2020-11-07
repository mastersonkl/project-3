import React from "react";
import "./Navbar.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../Images/logo.png"
const Navbar = () => {
  return (
    <div>
      <div className="ui menu">
        <div className="item">
          <Link to={"/home"}>
            <img
              alt="logo"
              className="ui small image"
              src={logo}
            />{" "}
          </Link>
        </div>
        <div className="item right">
          <div className="ui compact menu">
            <div className="ui simple dropdown item">
              User's Name
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item">
                  <Link to={"/review"}>Rate a Landlord</Link>
                </div>
                <div className="item">
                <Link to={"/search"}> Find a Landlord</Link>
                 </div>
                <div className="item">
                <Link to={"/login"}> Login/Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
