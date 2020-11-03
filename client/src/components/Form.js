import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      landlordName: "",
      address: "",
      rateStars: "",
      rentAgain: "",
      tellMore: "",
    };
  }

  onChange = (e) => {
    //   Because we named the inputs to match their
    //   corresponding values in state, it's
    //   super easy to update the state

    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const {
      landlordName,
      address,
      rateStars,
      rentAgain,
      tellMore,
    } = this.state;

    axios.post("/", { fname, lname, email }).then((result) => {
      //access the results here....
    });
  };

  render() {
    const {
      landlordName,
      address,
      rateStars,
      rentAgain,
      tellMore,
    } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="landlordName"
          value={landlordName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="address"
          value={address}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="rateStars"
          value={rateStars}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="rentAgain"
          value={rentAgain}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="tellMore"
          value={tellMore}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

/*   
import React, { Component } from 'react';
import axios from 'axios'; 
render() {
    return (
      <div className="ui container">
        <Form
          onChange={(fields) => this.onChange(fields)}
          onSubmit={(fields) => this.onSubmit(fields)}
        />
        {JSON.stringify(this.state.fields, null, 2)}
      </div>
    );
  }
}

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
    };
  }

  onChange = (e) => {
    
    //   Because we named the inputs to match their
    //   corresponding values in state, it's
    //   super easy to update the state
    
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;

    axios.post('/', { fname, lname, email })
      .then((result) => {
        //access the results here....
      });
  }

  render() {
    const { fname, lname, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
*/
