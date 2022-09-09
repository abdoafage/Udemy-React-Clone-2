import React from "react";
import "./WhatLearn.css";
import Done from '@mui/icons-material/Done';
import { Check } from "@mui/icons-material"; 
function WhatLearn() {
  const lst_what_learn = [
    "Have an intermediate skill level of Python programming.",
    "Use the Jupyter Notebook Environment.",
    "Use the numpy library to create and manipulate arrays.",
    "Use the pandas module with Python to create and structure data.",
    "Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.",
    "Create data visualizations using matplotlib and the seaborn modules with python.",
    "Have a portfolio of various data analysis projects.",
  ];
  return (
    <div className="WhatLearn">
      <h2 className="title">What you'll learn</h2>
      <div className="lst_what_learn">
        {
        lst_what_learn.map((e, index) => (
          <div className="lst_what_learn_single" key={index}>
            <Check style={{fontSize:"17px"}}/>
            <span >{e}</span>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default WhatLearn;
