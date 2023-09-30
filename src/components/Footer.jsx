import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h3>Prathamesh Kokane</h3>
        <p>prathameshkokane8312@gmail.com</p>
      </div>
      <div className="icons">
        <Link
          to={"https://www.linkedin.com/in/prathamesh-kokane"}
          target="blank"
        >
          <BsLinkedin />
        </Link>
        <Link to={"https://github.com/prathameshkokane"} target="blank">
          <BsGithub />
        </Link>
        <Link
          to={"https://www.instagram.com/_prathamesh_8312_/"}
          target="blank"
        >
          <BsInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
