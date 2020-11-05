import React from "react";
import SearchBar from "./SearchBar";
import "./Search.css";
import List from "./List";
import Axios from "axios";

class Search extends React.Component {
  state = { reviews: [], term: "" };
  onSearchSubmit = (e) => {
    e.preventDefault();
    console.log("state: ", this.state);
    // set state as reviews as an empty array
    // state = { reviews: [] };
    // need to make a get request with 'axios.get'
    // CODE HERE
    Axios.get("/search/" + this.state.term);
    // '.then' console.log the response from the get request
    // OR use async await and then console.log the response
    // CODE HERE

    // update state so the component rerenders
    // this.setState({ reviews: response });
  };

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="ui container">
          <div className="search-bar">
            <SearchBar
              onSearchSubmit={this.onSearchSubmit}
              onChange={this.handleChange}
              term={this.state.term}
            />
            {/*This line will confirm how many reviews are received */}
            {/* Found: {this.state.reviews.length} reviews */}
          </div>
        </div>
        <div className="ui container">
          <div className="results">
            <div>
              <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
