import React from "react";
import Popup from "reactjs-popup";
import "./ListItem.css";

const ListItem = (props) => {
  let reviewList = null;
  let nullSearch;

  const renderListItem = (reviewPacket) => {
    return (
      <div className="item">
        <img
          className="ui small image"
          src={require("../Images" + "/building.jpg")}
        />
        <div className="content">
          <p className="header">
            {/* see corresponding note in search.js @line 51 */}
            {/* {props.reviews[0].name} */}
            <i className="star icon"></i>
            <i className="star icon"></i>
            <i className="star icon"></i>
          </p>
          <span className="date">July 20th, 2019</span>
          <div></div>
          <i className="map marker icon"></i>
          <a className="address">2635 Monument Ave, Richmond, VA, 23222</a>
          <div className="description">
            Curabitur molestie, tortor et efficitur imperdiet, magna velit
            interdum nisl, eu ultricies enim velit id felis. Mauris venenatis
            elementum suscipit. Nullam felis arcu, gravida et erat id, malesuada
            consectetur urna..
          </div>
        </div>
        <Popup
          trigger={
            <button className="ui right labeled icon button">
              <i className="right arrow icon"></i>Continue
            </button>
          }
          position="right center"
        >
          <div>
            <div className="ui card">
              <img
                alt="building"
                className="ui large image"
                src={require("../Images/building.jpg")}
              />

              <div className="content">
                <a className="header">Landlord Name</a>
                <div className="meta">
                  <span className="date">July 20th, 2019</span>
                </div>
                <i className="star icon"></i>
                <i className="star icon"></i>
                <i className="star icon"></i>
                <div className="description">
                  Curabitur molestie, tortor et efficitur imperdiet, magna velit
                  interdum nisl, eu ultricies enim velit id felis. Mauris
                  venenatis elementum suscipit. Nullam felis arcu, gravida et
                  erat id, malesuada consectetur urna. Pellentesque pharetra,
                  velit sit amet placerat vestibulum, dolor enim scelerisque
                  enim, at auctor odio neque at mauris. Suspendisse tempor
                  gravida libero, eget aliquam nisl consectetur nec.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum ut lectus vitae
                  nisi tempor tincidunt vitae in mauris. Curabitur viverra, sem
                  vitae vulputate commodo, nulla dui facilisis ante, et aliquet
                  neque elit ut velit. Aliquam et mattis turpis.
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
