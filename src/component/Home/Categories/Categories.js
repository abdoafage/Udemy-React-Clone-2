import React from "react";
import SingleCategory from "./SingleCategory";

function Categories() {
  const category = [
    {img:"./image/Desgin.png",title:"Desgin"},
    {img:"./image/Development.png",title:"Development"},
    {img:"./image/Marketing.png",title:"Marketing"},
    {img:"./image/IT-and-Software.png",title:"IT and Software"},
    {img:"./image/personal-development.png",title:"personal development"},
    {img:"./image/Business.png",title:"Business"},
    {img:"./image/Photography.png",title:"Photography"},
    {img:"./image/Music.png",title:"Music"},
  ]
  return (
    <section className="categories-section">
      <div className="container-fluid">
        <div className="row">
          {
            category.map((cat,index)=>(
              <SingleCategory key={index} info = {cat}/>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Categories;
