import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <div className="poster">
        <img src="/images/about.png" className="vector-graphics" />
      </div>
      <div className="info">
        <h1>Prathamesh Kokane</h1>
        <h3>Full Stack developer</h3>
        <p>
          Welcome To Digital Gallery, Where I share my projects and What I am
          developing. I Build beautiful websites.
        </p>
        <div className="buttons">
          <Link
            to={"https://www.linkedin.com/in/prathamesh-kokane"}
            target="blank"
          >
            <button>
              <BsLinkedin />
              Linkedin
            </button>
          </Link>
          <Link to={"https://github.com/prathameshkokane"} target="blank">
            <button>
              <BsGithub />
              Github
            </button>
          </Link>
          <Link
            to={"https://www.instagram.com/_prathamesh_8312_/"}
            target="blank"
          >
            <button>
              <BsInstagram />
              Instagram
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
