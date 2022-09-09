import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = "https://api.npoint.io/65837082fff1d3a4cfba/";
const URL_review_content = "http://localhost:3000/review_content";
export const DataCoursesInfo = createContext({});
export const DataReviewContent = createContext({});

function DataLayerProvider({ children }) {
  const [data, setData] = useState();
  const [Data_review_content, set_Data_review_content] = useState();
  useEffect(() => {
    axios
      .get(URL)
      .then((e) => {
        // console.log(e.data);
        setData(e.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(URL_review_content)
      .then((e) => {
        // console.log(e.data);
        set_Data_review_content(e.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <DataCoursesInfo.Provider value={data}>
      <DataReviewContent.Provider value={Data_review_content}>
        {children}
      </DataReviewContent.Provider>
    </DataCoursesInfo.Provider>
  );
}

export default DataLayerProvider;
