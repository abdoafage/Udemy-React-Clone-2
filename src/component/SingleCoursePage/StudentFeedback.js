import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import React from "react";
import "./StudentFeedback.css";
function StudentFeedback() {
  const student_feedback = {
    courseId: 394676,
    isFreeSEOExp: false,
    ratingDistribution: [
      {
        rating: 1,
        count: 50,
      },
      {
        rating: 2,
        count: 95,
      },
      {
        rating: 3,
        count: 463,
      },
      {
        rating: 4,
        count: 1146,
      },
      {
        rating: 5,
        count: 1362,
      },
    ],
    stars: [1, 1, 1, 0.5, 0],
    averageRating: 4.384111,
    showUserAvatar: true,
    topReviewAttributes: [],
    page: "clp",
  };
  const arr = (num) => {
    const a = new Array(5).fill(0);
    for (let i = 0; i < num; i++) a[i] = 1;
    return a;
  };
  const iota = (n) => {
    const a = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      a[n - i - 1] = i;
    }
    return a;
  };
  const getPercentage=(num)=>{
    let sum=0;
    for(let i of student_feedback.ratingDistribution){
        // console.log(i);
        sum+=i.count;
    }
    return parseInt(((num)/sum)*100);
  }
  return (
    <div className="StudentFeedback">
      <h1 className="title">Student feedback</h1>
      <div className="StudentFeedback-body">
        <div className="StudentFeedback-course-rating">
          <div className="StudentFeedback-course-rating-number">4.4</div>
          <div className="StudentFeedback-course-stars">
            {student_feedback.stars.map((star, index) =>
              star == 1 ? (
                <Star key={index}/>
              ) : star == 0.5 ? (
                <StarHalf key={index}/>
              ) : (
                <StarOutline key={index}/>
              )
            )}
          </div>
          <div className="StudentFeedback-course-title">Course Rating</div>
        </div>
        <div className="StudentFeedback-bar-rating">
          {iota(5).map((num,ind) => (
            <div key={ind} className="StudentFeedback-bar-rating-single">
              <div className="StudentFeedback-bar-rating-bar">
                <div
                  className="StudentFeedback-bar-rating-bar-load"
                  style={{ width: `${getPercentage(student_feedback.ratingDistribution[num].count)}%` }}
                ></div>
              </div>
              <div className="StudentFeedback-bar-rating-stars">
                {arr(student_feedback.ratingDistribution[num].rating).map((e, index) =>
                  e == 1 ? <Star key={index}/> : <StarOutline key={index}/>
                )}
              </div>
              <div className="StudentFeedback-bar-rating-number">{getPercentage(student_feedback.ratingDistribution[num].count)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
