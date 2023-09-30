import React from "react";

import { FaArrowRight } from "react-icons/fa";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="projects">
      <h2>
        Projects <FaArrowRight style={{ color: "#005746" }} />
      </h2>
      {/* <div className="btns">
        <div className="single-btn">JAVASCRIPT</div>
        <div className="single-btn">REACT</div>
        <div className="single-btn">FULL STACK</div>
      </div> */}
      <Project />
    </div>
  );
};

export default Projects;
