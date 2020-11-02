import React from "react";

export default class Form extends React.Component {
  state = {
    landlordName: "",
    address: "",
    rateStars: "",
    rentAgain: "",
    tellMore: "",
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      landlordName: "",
      address: "",
      rateStars: "",
      rentAgain: "",
      tellMore: "",
    });
    this.props.onChange({
      landlordName: "",
      address: "",
      rateStars: "",
      rentAgain: "",
      tellMore: "",
    });
  };

  render() {
    return (
      <form>
        <div className="ui fluid input">
          <input
            name="landlordName"
            placeholder="Landlord Name"
            value={this.state.landlordName}
            onChange={(e) => this.change(e)}
          />
        </div>
        <div className="ui fluid input">
          <input
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={(e) => this.change(e)}
          />
        </div>
        <div className="ui fluid input">
          <input
            name="rateStars"
            placeholder="Rate out of 5 Stars"
            value={this.state.rateStars}
            onChange={(e) => this.change(e)}
          />
        </div>
        <div className="ui fluid input">
          <input
            name="rentAgain"
            placeholder="Would you rent from them again?"
            value={this.state.rentAgain}
            onChange={(e) => this.change(e)}
          />
        </div>
        <div className="ui fluid input">
          <input
            name="tellMore"
            placeholder="Tell us more about them"
            value={this.state.tellMore}
            onChange={(e) => this.change(e)}
          />
        </div>
        <button className="ui button" onClick={(e) => this.onSubmit(e)}>
          Submit
        </button>
      </form>
    );
  }
}
