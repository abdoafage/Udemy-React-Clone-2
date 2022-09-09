import React from "react";

function SingleCategory({info}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 mt-2">
      <div className="card">
        <img src={info.img} className="card-img-top" alt={info.title} />
        <div className="card-body">
          <p className="card-text">{info.title}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCategory;
