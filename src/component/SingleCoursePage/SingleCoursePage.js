import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
// import NavBar from "../Home/NavBar/NavBar";
// import HeaderSingleCourse from "./HeaderSingleCourse";
import "./SingleCoursePage.css";
// import { data } from "../../data";
import PageComponent from "./PageComponent";
import CardInformation from "./CardInformation";
import { useParams } from "react-router-dom";
import { DataCoursesInfo, DataReviewContent } from "./../../DataLayerProvider";
import Loader from "../Loader";
import HeaderSingleCourse from "./HeaderSingleCourse";
import { Star } from "@mui/icons-material";

function SingleCoursePage() {
  const DATA_CoursesInfo = useContext(DataCoursesInfo);
  const _DataReviewContent = useContext(DataReviewContent);

  const [courseSelectInfo, setCourseSelectInfo] = useState(null);
  const [courseSelect_review_content, setCourseSelect_review_content] =
    useState();
  const { nameOfCourse, id } = useParams();
  // console.log(id, nameOfCourse);
  // console.log(DATA_CoursesInfo);
  // console.log(_DataReviewContent);
  // console.log(courseSelectInfo);
  // console.log(courseSelect_review_content);
  // console.log("SingleCoursePage function");

  useEffect(() => {
    if (DATA_CoursesInfo && _DataReviewContent) {
      const a = DATA_CoursesInfo[nameOfCourse].courses.filter(
        (e) => e.id == id
      );
      setCourseSelectInfo(a);
      setCourseSelect_review_content(_DataReviewContent[id]);
    }
  }, [DATA_CoursesInfo, _DataReviewContent, id, nameOfCourse]);

  if (!courseSelectInfo || !DATA_CoursesInfo) return <Loader />;
  return (
    <div className="SingleCoursePage">
      <div className="sub-SingleCoursePage">
        <div className="sub-SingleCoursePage-title">
          {courseSelectInfo[0].title}
        </div>
        <div className="sub-SingleCoursePage-info">
          <div className="sub-SingleCoursePage-rate">
            {courseSelectInfo[0].rating.toFixed(1)} <Star />
          </div>
          <div className="sub-SingleCoursePage-num_students_rating">{`(18,074 ratings)`}</div>
          <div className="sub-SingleCoursePage-num_students">{`191,126 students`}</div>
        </div>
      </div>
      <div className="baner_show">
        <HeaderSingleCourse
          title={courseSelectInfo[0].title}
          description={courseSelectInfo[0].headline}
          Bestseller={true}
          rating_num={courseSelectInfo[0].rating}
          rating_stars={courseSelectInfo[0].stars}
          num_students_rating={"18,074"}
          num_students={"191,126"}
          created_by={courseSelectInfo[0].instructors[0].name}
          last_update={"9/2019"}
          image={courseSelectInfo[0].image}
        />
        <div className="blackSpace"></div>
      </div>
      <div className="SingleCoursePage-body">
        {courseSelectInfo && courseSelect_review_content && (
          <PageComponent
            courseSelect={courseSelectInfo[0]}
            review_content={courseSelect_review_content}
          />
        )}
        {courseSelectInfo && courseSelect_review_content && (
          <CardInformation courseSelect={courseSelectInfo[0]} />
        )}
      </div>
    </div>
  );
}

export default SingleCoursePage;
