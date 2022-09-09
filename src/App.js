import React, { createContext, useEffect, useState } from "react";
import "./App.css";
// import Categories from './component/Home/Categories/Categories';
// import CoursesSection from './component/Home/CoursesPart/CoursesSection';
// import Header from './component/Home/Header/Header';
import Home from "./component/Home/Home";
import NavBar from "./component/Home/NavBar/NavBar";
import SingleCoursePage from "./component/SingleCoursePage/SingleCoursePage";
import { Route, Routes } from "react-router-dom";
// import data from "./data";
import CoursesSection from "./component/Home/CoursesPart/CoursesSection";
import Footer from "./component/Home/Footer/Footer";
// import DataLayerProvider from "./DataLayerProvider";
function App() {
  return (
    // <DataLayerProvider>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="/:nameOfCourse" element={<CoursesSection />} />
        </Route>
        <Route
          exact
          path="/course/:nameOfCourse/:id"
          element={<SingleCoursePage />}
        />
        <Route path="*" element={<div> not found</div>}/>
      </Routes>
      <Footer />
    </div>
    // </DataLayerProvider>
  );
}

export default App;
