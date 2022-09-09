import { darkScrollbar } from "@mui/material";
import React, { useEffect } from "react";
import "./Description.css";

function Description({ description, forWho }) {
  return (
    <div className="Description">
      <h1 className="title">Description</h1>
      <div className="Description-content">
        {description.split("\n").map((e, index) => (
          <p key={index}>{e}</p>
        ))}
      </div>
      <h1 className="title-forWho">For who</h1>
      <div className="ForWho-content">{forWho}</div>
    </div>
  );
}

export default Description;
