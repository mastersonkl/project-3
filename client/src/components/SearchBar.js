import React from "react";
function SearchBar(props) {
  // rendering the search bar

  return (
    <div className="ui segment">
      {/* calls the function to console log the value when user submits */}
      <form onSubmit={props.onSearchSubmit} className="ui fluid action input">
        <input // props
          type="text"
          placeholder="Landlord or address you're looking for."
          value={props.term}
          onChange={props.onChange}
        />
        <button className="ui button">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
