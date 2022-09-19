import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
// import NavBar from "../Home/NavBar/NavBar";
// import HeaderSingleCourse from "./HeaderSingleCourse";
import "./SingleCoursePage.css";
// import { data } from "../../data";
// import PageComponent from "./ContentOfPage";
import CardInformation from "./CardInformation";
import { useParams } from "react-router-dom";
import { DataCoursesInfo, DataReviewContent } from "./../../DataLayerProvider";
import Loader from "../Loader";
import HeaderSingleCourse from "./HeaderSingleCourse";
import { Star } from "@mui/icons-material";
import ContentOfPage from "./ContentOfPage";

function SingleCoursePage() {
  const DATA_CoursesInfo = useContext(DataCoursesInfo);
  const _DataReviewContent = useContext(DataReviewContent);

  const [courseSelectInfo, setCourseSelectInfo] = useState(null);
  const [courseSelect_review_content, setCourseSelect_review_content] =
    useState();
  const { nameOfCourse, id } = useParams();
  // console.log(id, nameOfCourse);
  console.log(DATA_CoursesInfo);
  // console.log(_DataReviewContent);
  // console.log(courseSelectInfo);
  // console.log(courseSelect_review_content);
  // console.log("SingleCoursePage function");

  useEffect(() => {
    if (DATA_CoursesInfo && _DataReviewContent) {
      let a = null;
      for (let nameOfCourse in DATA_CoursesInfo) {
        console.log(nameOfCourse);
        DATA_CoursesInfo[nameOfCourse].courses.map((e) => {
          e.id == id ? (a = e) : (a = a);
        });
      }
      console.log(a);
      setCourseSelectInfo(a);
      setCourseSelect_review_content(_DataReviewContent[id]);
    }
  }, [DATA_CoursesInfo, _DataReviewContent, id, nameOfCourse]);

  if (!courseSelectInfo || !DATA_CoursesInfo) return <Loader />;
  return (
    <div className="SingleCoursePage">
      <div className="sub-SingleCoursePage">
        <div className="sub-SingleCoursePage-title">
          {courseSelectInfo.title}
        </div>
        <div className="sub-SingleCoursePage-info">
          <div className="sub-SingleCoursePage-rate">
            {courseSelectInfo.rating.toFixed(1)} <Star />
          </div>
          <div className="sub-SingleCoursePage-num_students_rating">{`(18,074 ratings)`}</div>
          <div className="sub-SingleCoursePage-num_students">{`191,126 students`}</div>
        </div>
      </div>
      <div className="baner_show">
        <HeaderSingleCourse
          title={courseSelectInfo.title}
          description={courseSelectInfo.headline}
          Bestseller={true}
          rating_num={courseSelectInfo.rating}
          rating_stars={courseSelectInfo.stars}
          num_students_rating={"18,074"}
          num_students={"191,126"}
          created_by={courseSelectInfo.instructors[0].name}
          last_update={"9/2019"}
          image={courseSelectInfo.image}
        />
        <div className="blackSpace"></div>
      </div>
      <div className="SingleCoursePage-body">
        {courseSelectInfo && courseSelect_review_content && (
          <ContentOfPage
            courseSelect={courseSelectInfo}
            review_content={courseSelect_review_content}
          />
        )}
        {courseSelectInfo && courseSelect_review_content && (
          <CardInformation courseSelect={courseSelectInfo} />
        )}
      </div>
    </div>
  );
}

export default SingleCoursePage;
