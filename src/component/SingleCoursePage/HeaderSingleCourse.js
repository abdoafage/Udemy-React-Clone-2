import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./HeaderSingleCourse.css";
function HeaderSingleCourse(props) {
  const {
    title,
    description,
    Bestseller,
    rating_num,
    rating_stars,
    num_students_rating,
    num_students,
    created_by,
    last_update,
    image
  } = props;

  return (
    <header className="HeaderSingleCourse">
      <div className="image">
        <img src={image} />
        <div className="image-cover"></div>
        <div className="play-icon">
          <PlayCircleFilledWhiteIcon />
        </div>
      </div>
      <h2 className="title">
        {title}
      </h2>
      <div className="description">
        {description}
      </div>
      <div className="info-rating">
        {Bestseller===true?(<div className="bestSeller">Bestseller</div>):null}
        <div className="rating">
          <div className="rating-num">{rating_num.toFixed(1)}</div>
          <div className="rating-stars">{
            rating_stars.map((e,index)=>(
              e==1?<Star key={index}/>:e==.5?<StarHalf key={index}/>:<StarOutline key={index}/>
            ))
          }</div>
        </div>
        <div className="num_students_rating">({num_students_rating}) rating</div>
        <div className="num_students">{num_students} students</div>
      </div>
      <div className="created_by">Created by <span className="created_by_info">{created_by}</span></div>
      <div className="last_update">last update {last_update}</div>
    </header>
  );
}

export default HeaderSingleCourse;
