/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PostSummaryList from "./PostSummaryList";
require("./explore.css");

const ExploreScreen = () => {
  return (
    <div className="col col-lg-5 col-9">
      <div className="row mb-2">
        <div className="col-11">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"> </span>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search Tuiter"
            />
          </div>
        </div>
        <div className="col-1">
          <a href="#">
            {" "}
            <i className="fa fa-cog settings-cog mt-1"> </i>{" "}
          </a>
        </div>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            For You
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Entertainment
          </a>
        </li>
      </ul>
      <div className="card mt-2">
        <div className="image-container">
          <img
            src="https://media.istockphoto.com/photos/space-shuttle-in-the-rays-of-sun-picture-id1131418344?k=20&m=1131418344&s=612x612&w=0&h=yPyqDj2LYNbPNr8e69PQGm3LZZVTUWU0tjHzDsDl7YU="
            className="card-img-top"
            alt="space shutlte"
          />
          <div className="card-img-overlay">
            <div className="image-overlay-text">SpaceX's Starship</div>
          </div>
        </div>
      </div>

      <PostSummaryList />
    </div>
  );
};

export default ExploreScreen;
