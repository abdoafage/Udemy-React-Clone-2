import React from "react";
import Categories from "./Categories/Categories";
import CoursesSection from "./CoursesPart/CoursesSection";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      <CoursesSection />
      <Categories />
    </div>
  );
}

export default Home;
