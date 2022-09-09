import React from "react";
import {
  Star,
  Visibility,
  People,
  PlayCircleFilledWhite,
} from "@mui/icons-material";
import "./Instructors.css";

function Instructors(props) {
  const {instructor} = props;
  return (
    <div className="Instructors">
      <h1 className="title">Instructors</h1>
      {instructor.map((ins, index) => (
        <SingleInstructor
          key={index}
          name={ins.name}
          jop={ins.jop}
          image={ins.image}
          rating={ins.rating!=undefined?ins.rating:"4.5"}
          num_reviews={ins.num_reviews!=undefined?ins.num_reviews:"73,709"}
          num_students={ins.num_students!=undefined?ins.num_students:"890,293"}
          num_courses={ins.num_courses!=undefined?ins.num_courses:"18"}
          description={ins.description!=undefined?ins.description:["no description"]}
        />
      ))}
    </div>
  );
}

function SingleInstructor(props) {
  const {name,jop,image,rating,num_reviews,num_students,num_courses,description} = props;
  return (
    <div className="single-instructor">
      <div className="single-instructor-title">{name}</div>
      <div className="single-instructor-jop">
        {jop}
      </div>
      <div className="single-instructor-info">
        <div className="img">
          <img src={image} />
        </div>
        <div className="single-instructor-info-rating">
          <div className="single-instructor-info-rating-rating">
            <div>
              <Star style={{ fontSize: "16px" }} />
            </div>
            <div>{rating} instructor rating</div>
          </div>
          <div className="single-instructor-info-rating-reviews">
            <div>
              <Visibility style={{ fontSize: "16px" }} />{" "}
            </div>
            <div>{num_reviews} Reviews</div>
          </div>
          <div className="single-instructor-info-rating-students">
            <div>
              <People style={{ fontSize: "16px" }} />{" "}
            </div>
            <div>{num_students} Students</div>
          </div>
          <div className="single-instructor-info-rating-Courses">
            <div>
              <PlayCircleFilledWhite style={{ fontSize: "16px" }} />{" "}
            </div>
            <div>{num_courses} Courses</div>
          </div>
        </div>
      </div>
      <div className="description">
        {description.map((p, index) => (
          <p className="description-paragraph" key={index}>
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Instructors;
