import { Search } from "@mui/icons-material";
import React from "react";
import ContentReview from "./ContentReview";
import SearchBarReviews from "./SearchBarReviews";
import "./Reviews.css";

function Reviews(props) {
  return (
    <div className="Reviews">
      <h1 className="title">Reviews</h1>
      {/* <div className="Reviews-body"> */}
        <SearchBarReviews />
        <ContentReview reviews={props.reviews}/>
      {/* </div> */}
    </div>
  );
}

export default Reviews;
