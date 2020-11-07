import React from "react";
import axios from "axios";
import StarRating from "./StarRating";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      landlordName: "",
      address: "",
      rating: "",
      website: "",
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
      rating,
      website,
      tellMore,
    } = this.state;

    axios
      .post("/newreview", {
        landlordName,
        address,
        rating,
        website,
        tellMore,
      })
      .then((result) => {
        console.log("result of new review:\n");
        console.log(result);
      });
  };

  render() {
    const {
      landlordName,
      address,
      rating,
      website,
      tellMore,
    } = this.state;

    return (

      <div className="container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
      <form className="ui large form" onSubmit={this.onSubmit}>
        <div class="ui stacked segment">

      <div className="field">
      <div className="ui left icon input">
        <i className="address card icon"></i>
        <input
          type="text"
          name="landlordName"
          value={landlordName}
          onChange={this.onChange}
          placeholder="Landlord Name"
        />
        </div>
        </div>

      <div className="field">
      <div className="ui left icon input">
        <i className="home icon"></i>
        <input
          type="text"
          name="address"
          value={address}
          onChange={this.onChange}
          Placeholder="Address"
        />
        </div>
        </div>

      <div className="field">
      <div className="ui left icon input">
        <i className="edit icon"></i>
        <input
          type="text"
          name="tellMore"
          value={tellMore}
          onChange={this.onChange}
          Placeholder="How was your experience?"
        />
        </div>
        </div>

      <div className="field">
      <div className="ui left icon input">
        <i className="linkify icon"></i>
        <input
          type="text"
          name="website"
          value={website}
          onChange={this.onChange}
          Placeholder="Link to website"
        />
        </div>
        </div>

        {/* OLD STAR RATING FORM FIELD */}
      {/* <div className="field">
      <div className="ui left icon input">
        <i className="lock icon"></i>
        <input
          type="text"
          name="rating"
          value={rating}
          onChange={this.onChange}
          Placeholder="Rating"
        />
        </div>
        </div> */}
        
{/* NEW STAR RATING FORM FIELD */}
      <div className="field">
        <StarRating />
        {StarRating.state}
        </div>

        <button type="submit" className="ui fluid large teal submit button">Submit</button>
        </div>
      </form>
      {/* <div>I certify that, to the best of my knowledge and belief, the statements provided here are true and correct.</div>
              <div className="ui fitted toggle checkbox"><input type="checkbox" class="" readonly="" tabindex="0"/><label></label></div>
               */}
               </div>
              </div>
              </div>
              
    );
  }
}

export default Form;
