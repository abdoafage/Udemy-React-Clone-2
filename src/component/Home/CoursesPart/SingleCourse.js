import React from "react";
import { Link } from "react-router-dom";
import style from "./SingleCoursesSection.module.css";

function SingleCourse(props) {
  const { instructors, image, title, rating, stars, price } = props;

  return (
    <div className={`${style.sigleCourse} `}>
      <div className={style.sigleCourseImg}>
        <img src={image} alt={title} />
      </div>
      <div className={style.sigleCourseInfo}>
        <div className={style.sigleCourseTitle}>{title}</div>
        <div className={style.sigleCourseAuther}>{instructors[0].name}</div>
        <div className={style.sigleCourseRate} >
          <ul id="sigleCourseStars" style={{padding:"0px"}}>
            <i>{rating.toFixed(1)}</i>
            {stars.map((e, index) => (
              <i
                key={index}
                className={
                  e === 1
                    ? "fas fa-star"
                    : e === 0.5
                    ? "fas fa-star-half-alt"
                    : "fa-regular fa-star"
                }
                style={{ color: "#f4c150" }}
              ></i>
            ))}
          </ul>
        </div>
        <div className={style.sigleCoursePrice}>E£${price}</div>
      </div>
    </div>
  );
}

export default SingleCourse;
