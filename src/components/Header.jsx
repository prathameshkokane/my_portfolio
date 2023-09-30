import React from "react";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <button className="text">Home</button>
      </Link>
      <Link to={"/projects"}>
        <button className="text">Projects</button>
      </Link>
      <Link to={"/contact"}>
        <button className="text">Contact</button>
      </Link>
      <Link to={"Prathamesh Kokane Resume.pdf"} target="blank">
        <button className="button">
          <HiDownload />
          Resume
        </button>
      </Link>
    </div>
  );
};

export default Header;
