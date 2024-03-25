import React from "react";
import "./homepage.scss";
import SearchBar from "../../components/searchbar/SearchBar";

function Homepage() {
  return (
    <div className="homepage">
      <div className="textbox">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get
             Your Dream Place
          </h1>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            reprehenderit placeat iure cum totam amet saepe minima autem ipsam
            magni. Tempore libero accusamus voluptas neque asperiores ducimus
            numquam commodi quis optio sed.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1 className="rating">16+</h1>
              <span>Years of experience</span>
            </div>
            <div className="box">
              <h1 className="rating">16+</h1>
              <span>Years of experience</span>
            </div>
            <div className="box">
              <h1 className="rating">16+</h1>
              <span>Years of experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="imagebox">
        <img src="bg.png" alt="" className="image" />
      </div>
    </div>
  );
}

export default Homepage;
