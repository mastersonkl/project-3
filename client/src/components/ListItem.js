import React from "react";
import Popup from "reactjs-popup";
import "./ListItem.css";

const ListItem = (props) => {
  let reviewList = null;
  let nullSearch;

  const renderListItem = (reviewPacket) => {
    return (
      <div className="container">

        <div className="column">
      <div key={reviewPacket.id} className="item">
        <div className="content">
          <h1 className="name">{reviewPacket.name}</h1>
          <div></div>
          <h3 className="address"><i className="yellow map marker icon"></i>{reviewPacket.address}</h3>
        </div>
        
        <h3 className="website"><i className="grey linkify icon"></i>{reviewPacket.website}</h3>
<div>
        <Popup
          trigger={
            <button className="ui right labeled icon button popout">
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
        <div class="ui divider"></div>
      </div>
      </div></div>
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
