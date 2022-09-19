import React, { useRef } from "react";
import { Link, useSearchParams, useLocation,useNavigate } from "react-router-dom";
import "./NavBar.css";
import svgLogo from "./logo-udemy.svg";

function NavBar() {
  const refSearchBar = useRef();
  const [searchBarParams, setSearchBarParams] = useSearchParams();
  let navigate = useNavigate();
  const searchSubmit = (event) => {
    event.preventDefault();

    setSearchBarParams({ search: refSearchBar.current.value });
    //console.log(loc);
  };
  // const HandleInputSearchBar = () =>{

  // }
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-lst bars">
          <div className="bars-icon">
            <i className="fa-solid fa-bars"></i>
          </div>
        </li>
        <li className="nav-lst logo">
          <Link to="/">
            <img className="udemy-logo" src={svgLogo} alt="udemy logo" />
          </Link>
        </li>
        <li className="nav-lst category">Categories</li>
        <li className="nav-lst search-bar">
          <form className="search-bar-form" onSubmit={searchSubmit}>
            <button type="submit" className="search-icon" onClick={()=>{navigate(`/`)}}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              ref={refSearchBar}
              type="text"
              name="search-input"
              className="search-input"
              placeholder="seach for category"
            />
          </form>
        </li>
        <li className="nav-lst udemy-business">
          <a href="#">udemy business</a>
        </li>
        <li className="nav-lst teach-on-udemy">
          <a href="#">teach on udemy</a>
        </li>
        <li className="nav-lst shop-card">
          <a href="#">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </li>
        <li className="nav-lst login">
          <button className="btn-login">Log in</button>
        </li>
        <li className="nav-lst signin">
          <button className="btn-signin">Sign up</button>
        </li>
        <li className="nav-lst net-logo">
          <div>
            <a href="#">
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
