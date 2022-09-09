import {
  Star,
  StarBorder,
  StarHalf,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React, { useState } from "react";
import "./ContentReview.css";

function ContentReview(props) {
  const {reviews} = props;
  
  
  return (
    <div className="ContentReview">
      {reviews.results.map((e, index) => (
        <SingleReviews key={index} review={e} />
      ))}
    </div>
  );
}

function SingleReviews(props) {
  const { review } = props;
  const [likes,setLikes]=useState({like:false,disLike:false});
  //const [dislike,setDislike]=useState(0);
  const handleLike = (ind) =>{
    if(!ind){
      setLikes({like:!likes.like,disLike:false})
    }else{
      setLikes({like:false,disLike:!likes.disLike})
    }
  }
  const arr = (num) => {
    const a = new Array(5).fill(0);
    let q = 0;
    while (num) {
      a[q++] = Math.min(num, 1);
      num = Math.max(0, num - 1);
    }
    return a;
  };
  return (
    <div className="review-single">
      <div className="img">
        <div>{review.user.initials}</div>
      </div>
      <div className="review-single-info">
        <div className="review-single-info-name">
          {review.user.public_display_name}
        </div>
        <div className="review-single-info-rate-time">
          <div className="review-single-info-rate">
            {arr(review.rating).map((e, index) =>
              e == 1 ? <Star key={index}/> : e == 0.5 ? <StarHalf key={index}/> : <StarBorder key={index}/>
            )}
          </div>
          <div className="review-single-info-time">
            {review.created_formatted_with_time_since}
          </div>
        </div>
        <div className="review-single-info-content">{review.content}</div>
        <div className="review-single-question">
          <div className="review-single-question-q">
            Was this review helpful?
          </div>
          <div className="review-single-question-lst">
            <button className="review-single-question-like" onClick={()=>handleLike(0)}>
              {likes.like?<ThumbUp />:<ThumbUpOffAltIcon/>}
            </button>
            <button className="review-single-question-dislike" onClick={()=>handleLike(1)}>
              {likes.disLike?<ThumbDown />:<ThumbDownOffAltIcon/>}
            </button>
            <div className="review-single-question-report">Report</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentReview;
