import React, { useState } from "react";
import "./CourseContent.css";
import { FiberManualRecord } from "@mui/icons-material";
import { PlayCircleFilledWhite } from "@mui/icons-material";
import {InsertDriveFile} from '@mui/icons-material';
function CourseContent(props) {
  const {curriculum_context} =props;
  const [numOfSectionAppear,setNumOfSectionAppear]=useState(10);
  const HandleMoreSections=(e)=>{
    setNumOfSectionAppear(Math.min(numOfSectionAppear+10,curriculum_context.data.sections.length));
  }
  return (
    <div className="CourseContent">
      <h2 className="title">Course content</h2>
      <div className="course-info">
        <div className="num_sections">
          {curriculum_context.data.sections.length} sections
        </div>
        <div>
          <FiberManualRecord style={{ fontSize: "5px" }} />
        </div>
        <div className="num_lectures">
          {curriculum_context.data.num_of_published_lectures} lectures
        </div>
        <div>
          <FiberManualRecord style={{ fontSize: "5px" }} />{" "}
        </div>
        <div className="total_length">
          {curriculum_context.data.estimated_content_length_text} total length
        </div>
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {curriculum_context.data.sections.map((section, index) => {
          if(index<numOfSectionAppear)
            return <div key={index} className="accordion-item">
            <h2
              className="accordion-header"
              id={`panelsStayOpen-heading${index}`}
            >
              <button
                className={`accordion-button ${index!==0?"collapsed":""}`}
                // style={{outline:"none !important"}}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapse${index}`}
                aria-expanded={index==0?"true":"false"}
                aria-controls={`panelsStayOpen-collapse${index}`}
              >
                <div className="title-section">
                  <div className="title-csection-name">{section.title}</div>
                  <div className="section-info">
                    <div className="section-info-lecture-count">
                      {section.lecture_count} lectures
                    </div>
                    <div>
                      <FiberManualRecord style={{ fontSize: "5px" }} />
                    </div>
                    <div className="section-info-time">
                      {section.content_length_text}
                    </div>
                  </div>
                </div>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${index}`}
              className={`accordion-collapse collapse ${index==0?"show":""}`}
              aria-labelledby={`panelsStayOpen-heading${index}`}
            >
              <div className="accordion-body">
                <ul className="content-section">
                  {section.items.map((e, idx) => (
                    <li key={`${index}-${idx}`} className="content-section-item">
                      <div className="content-section-item-title">
                        {e.content_summary[e.content_summary.length-1]=='s'?<InsertDriveFile style={{fontSize:"16px"}}/>:<PlayCircleFilledWhite style={{fontSize:"16px"}}/>}<span className={e.can_be_previewed==true?"previewed":""}> {e.title} </span>
                      </div>
                      <span className="content-section-item-info">
                        {e.can_be_previewed===true?(<div className="previewed">Preview</div>):null}
                        <div>{e.content_summary}</div>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
        })}
      </div>
      {
        Math.min(numOfSectionAppear+10,curriculum_context.data.sections.length)-numOfSectionAppear>0?(
          <button className="more-section" onClick={HandleMoreSections}>
            {Math.min(numOfSectionAppear+10,curriculum_context.data.sections.length)-numOfSectionAppear} more sections
          </button>
        ):null
      }
      
    </div>
  );
}

export default CourseContent;
