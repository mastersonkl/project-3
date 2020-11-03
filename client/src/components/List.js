import React from "react";
import Popup from "reactjs-popup";

const List = () => {
  return (
    <div>
      <div className="ui container">
        <div className="ui big very relaxed list">
          <div className="item">
            <img
              className="ui small image"
              src={require("../Images" + "/building.jpg")}
            />
            <div className="content">
              <p className="header">
                Landlord Name
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
                interdum nisl, eu ultricies enim velit id felis. Mauris
                venenatis elementum suscipit. Nullam felis arcu, gravida et erat
                id, malesuada consectetur urna..
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
                      Curabitur molestie, tortor et efficitur imperdiet, magna
                      velit interdum nisl, eu ultricies enim velit id felis.
                      Mauris venenatis elementum suscipit. Nullam felis arcu,
                      gravida et erat id, malesuada consectetur urna.
                      Pellentesque pharetra, velit sit amet placerat vestibulum,
                      dolor enim scelerisque enim, at auctor odio neque at
                      mauris. Suspendisse tempor gravida libero, eget aliquam
                      nisl consectetur nec. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Vestibulum ut lectus vitae nisi tempor tincidunt
                      vitae in mauris. Curabitur viverra, sem vitae vulputate
                      commodo, nulla dui facilisis ante, et aliquet neque elit
                      ut velit. Aliquam et mattis turpis.
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
