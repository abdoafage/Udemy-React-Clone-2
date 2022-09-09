import React from "react";
import CourseContent from "./CourseContent";
import HeaderSingleCourse from "./HeaderSingleCourse";
import Instructors from "./Instructors";
import "./PageComponent.css";
import Requirements from "./Requirements";
import Reviews from "./Reviews/Reviews";
import StudentFeedback from "./StudentFeedback";
import WhatLearn from "./WhatLearn";
import DATA from "./../../DATA/DATA.json";
import Description from "./Description";
import Loader from "../Loader";

function PageComponent({ courseSelect, review_content }) {
  return (
    <div className="PageComponent">
      <WhatLearn />
      {<CourseContent curriculum_context={review_content.curriculum_context} />}
      {<Requirements requirements={review_content.details.Requirements} />}
      {
        <Description
          description={review_content.details.description}
          forWho={review_content.details.for_who}
        />
      }
      {<Instructors instructor={courseSelect.instructors} />}
      {<StudentFeedback />}
      {<Reviews reviews={review_content.reviews} />}
    </div>
  );
}

export default PageComponent;
