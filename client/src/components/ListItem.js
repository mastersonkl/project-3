import React from "react";
import Popup from "reactjs-popup";
import "./ListItem.css";

const ListItem = (props) => {
  let reviewList = null;
  let nullSearch;

  const renderListItem = (reviewPacket) => {
    return (
      <div key={reviewPacket.id} className="item">
        <div className="content">
          <span className="name">{reviewPacket.name}</span>
          <div></div>
          <i className="map marker icon"></i>
          <a className="address">{reviewPacket.address}</a>
        </div>
        <a className="website">{reviewPacket.website}</a>

        <Popup
          trigger={
            <button className="ui right labeled icon button">
              <i className="right arrow icon"></i>Read
            </button>
          }
          position="right center"
        >
          <div>
            <div className="ui card">

              <div className="content">
                <a className="header">{reviewPacket.name}</a>
                <div className="meta">
                  <span className="date">{reviewPacket.address}</span>
                </div>
                <div className="description">
                {reviewPacket.review}
                </div>
              </div>
            </div>
          </div>
        </Popup>
      </div>
    );
  };

  if (!props.reviews) {
    // if there is nothing in reviews, execute this code
    console.log("if there is nothing in reviews, execute this code");
    reviewList = null;
    nullSearch = <div>After searching, your results will appear here!</div>;
  } else {
    if (!props.reviews[0]) {
      // reviews has been passed in properly, but the array is empty
      console.log(
        "reviews has been passed in properly, but the array is empty"
      );
      reviewList = [];
      nullSearch = (
        <div>
          We couldn't find any reviews with that as a name or address. Check
          your spelling or try a different search.
        </div>
      );
    } else {
      // reviews has been passed in, contains entries
      console.log(" reviews has been passed in, contains entries");
      reviewList = props.reviews.map((rowPacket) => {
        return renderListItem(rowPacket);
      });
      console.log("reviewList: ", reviewList);
    }
  }

  return (
    <div>
      {nullSearch}
      <div className="ui container">
        <div className="ui big very relaxed list">{reviewList}</div>
      </div>
    </div>
  );
};

export default ListItem;
