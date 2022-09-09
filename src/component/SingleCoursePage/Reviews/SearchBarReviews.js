import { ArrowDropDown, Search } from "@mui/icons-material";
import React from "react";
import "./SearchBarReviews.css";

function SearchBarReviews() {
  return (
    <div className="SearchBarReviews">
      <form className="SearchBarReviews-form">
        <div className="SearchBarReviews-form-input">
          <input type={"text"} placeholder="Search reviews" />
          <div className="SearchBarReviews-form-iconSearch">
            <Search />
          </div>
        </div>
        <div className="SearchBarReviews-form-search-rating">
          <select className="SearchBarReviews-form-search-rating-select">
            <option value="0">All ratings</option>
            <option value="5">five stars</option>
            <option value="4">four stars</option>
            <option value="3">three stars</option>
            <option value="2">two stars</option>
            <option value="1">one stars</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchBarReviews;
