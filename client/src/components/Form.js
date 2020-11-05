import React from "react";
import axios from "axios";

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

    axios
      .post("/newreview", {
        landlordName,
        address,
        rateStars,
        rentAgain,
        tellMore,
      })
      .then((result) => {
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
