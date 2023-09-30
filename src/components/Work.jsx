import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work">
      <div className="info">
        <h3>
          Work <FaArrowRight style={{ color: "#005746" }} />
        </h3>
        <p>
          As a web developer, I specialize in building web applications using
          React, NodeJS, and ExpressJS. I have experience with databases such as
          MongoDB and MySQL, and I place a strong emphasis on creating
          user-friendly and visually appealing UI/UX designs for websites.
        </p>

        <Link to={"/projects"}>
          <button>Projects</button>
        </Link>
      </div>
      <div className="poster">
        <img src="/images/work.png" className="vector-graphics" />
      </div>
    </div>
  );
};

export default Work;
