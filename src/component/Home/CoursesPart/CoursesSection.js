import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { DataCoursesInfo } from "../../../DataLayerProvider";
import Loader from "../../Loader";
import SingleCoursesSection from "./SingleCoursesSection";
// import data from "./data";
const URL = "https://api.npoint.io/65837082fff1d3a4cfba/";

function CoursesSection() {
  const { nameOfCourse } = useParams();
  const [searchBarParams,setSearchBarParams] = useSearchParams();
  const DataCourses = useContext(DataCoursesInfo);
  const TABS_BTN = [
    { info: "Python", title: "Python" },
    { info: "Excel", title: "Excel" },
    { info: "WebDevelopment", title: "Web Development" },
    { info: "JavaScript", title: "JavaScript" },
    { info: "DataScience", title: "Data Science" },
    { info: "AWSCertificate", title: "AWS Certificate" },
    { info: "Drawing", title: "Drawing" },
  ];
  
  const [tab, setTab] = useState(nameOfCourse==null?"Python":nameOfCourse);
  const [data, setData] = useState({});
  
  

  useEffect(() => {
    // console.log(searchBarParams.get("search"));
    if(searchBarParams.get("search")!=undefined){
      const isExistThisCourse = TABS_BTN.filter((e)=>{
        return e.info.toLowerCase() === searchBarParams.get("search").split(" ").join("").toLowerCase();
      });
      if(isExistThisCourse.length){
        setTab(isExistThisCourse[0].info);
      }
    }
    if(DataCourses!=undefined){
      setData(DataCourses);
    }
  }, [DataCourses,tab,searchBarParams]);

  const changeTab = (val) => {
    setTab(val);
  };
  return (
    <div className="p-3">
      <h1>A broad selection of courses</h1>
      <div>
        Choose from 204,000 online video courses with new additions published
        every month
      </div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {TABS_BTN.map((e, index) => (
          <li key={index} className="nav-item" role="presentation">
            <Link to={e.info}>
              <button
                className={`nav-link ${(index === 0 && nameOfCourse==null)||(nameOfCourse==e.info) ? "active" : ""}`}
                id={`${e.info}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${e.info}`}
                type="button"
                role="tab"
                aria-controls={`${e.info}`}
                aria-selected={`${index === 0 ? "true" : "false"}`}
                onClick={() => changeTab(`${e.info}`)}
              >
                {e.title}
              </button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        { data[tab]!=undefined?<SingleCoursesSection data={data[tab]} />:<Loader />}
      </div>
    </div>
  );
}

export default CoursesSection;
