import React from 'react';
import SearchBar from './SearchBar';

class Search extends React.Component {

  onSearchSubmit(term) {
      
    console.log(term);
    // set state as reviews as an empty array
    // state = { reviews: [] };

    // need to make a get request with 'axios.get'
            // CODE HERE
    // '.then' console.log the response from the get request
    // OR use async await and then console.log the response
            // CODE HERE

    // update state so the component rerenders
    // this.setState({ reviews: response });

  
 }



render() {
    return (
        <div className="ui container">
            <SearchBar onSubmit={this.onSearchSubmit} />
            {/*This line will confirm how many reviews are received */}
            {/* Found: {this.state.reviews.length} reviews */}
        </div>
    );
}
}

export default Search;