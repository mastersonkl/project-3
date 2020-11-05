import React from "react";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import Login from "./components/Login";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router>
          <Navbar />

          <Route path="/login" component={Login} />

          <Route path="/review" component={Form} />

          <Route path="/search" component={Search} />
        </Router>
      </div>
    );
  }
}

export default App;
