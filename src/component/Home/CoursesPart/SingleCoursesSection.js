import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SingleCourse from "./SingleCourse";
import style from "./SingleCoursesSection.module.css";

function SingleCoursesSection(props) {
  // const img1 = "./image/python1.jpg";
  const dataCategory = props.data;
  const groupCoursesRef = useRef();
  useEffect(() => {
    groupCoursesRef.current.style.left = "0";
  }, [dataCategory]);
  const HandleRightShift = (e) => {
    const barCourses = groupCoursesRef.current;

    const pos =
      parseInt(barCourses.style.left == "" ? 0 : barCourses.style.left) - 259;

    if (dataCategory.courses.length * -259 < pos)
      barCourses.style.left = pos + "px";
  };
  const HandleLeftShift = (e) => {
    const barCourses = groupCoursesRef.current;

    const pos =
      parseInt(barCourses.style.left == "" ? 0 : barCourses.style.left) + 259;
    if (pos <= 0) barCourses.style.left = pos + "px";
  };
  return (
    <div className={style.showCourses}>
      <div className={style.hderOfCoursesSection}>
        <div className={style.title}>{dataCategory.header}</div>
        <div className={style.details}>{dataCategory.description}</div>
      </div>
      <button type="button" className={style.btnExplore}>
        Explore {dataCategory.nameCategory}
      </button>
      <div className={style.lstCourses}>
        <div className={style.lstGroupCourses}>
          <div className={style.groupCourses} ref={groupCoursesRef}>
            {dataCategory.courses.map((course, index) => (
              <Link
                key={index}
                to={`course/${course.id}`}
                style={{ color: "black" }}
              >
                <SingleCourse {...course} />
              </Link>
            ))}
          </div>
          <button className={style.rightArrow} onClick={HandleRightShift}>
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
          <button className={style.leftArrow} onClick={HandleLeftShift}>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCoursesSection;
