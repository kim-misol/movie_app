import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FaArrowDown, FaCalendarCheck, FaStar, FaDownload } from 'react-icons/fa';
// https://github.com/react-icons/react-icons         // react-icons usage
// https://fontawesome.com/icons?d=gallery&q=download // check the icons from this link

function Navigation() {
  return (
    <div className="nav">
      <Link to="/" >List</Link>
      {/* <Link to="/about">About</Link> */}
      <Link to="/sortby_year"><FaCalendarCheck /> <FaArrowDown/></Link>
      <Link to="/sortby_rating"><FaStar /> <FaArrowDown/></Link>
      <Link to="/sortby_download_count"><FaDownload /> <FaArrowDown/></Link>
    </div>
  );
}

export default Navigation;
