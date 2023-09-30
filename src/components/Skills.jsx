import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3, SiJavascript, SiMongodb, SiReact } from "react-icons/si";
import { FaGitAlt, FaGithub, FaJava, FaNodeJs } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { BsTriangleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <div className="buttons">
        <button>
          <ImHtmlFive2 />
          HTML
        </button>
        <button>
          <SiCss3 />
          CSS
        </button>
        <button>
          <SiJavascript />
          JAVASCRIPT
        </button>
        <button>
          <SiReact />
          REACT
        </button>
        <button>
          <FaNodeJs />
          NODEJS
        </button>
        <button>
          <FaGithub />
          GITHUB
        </button>

        <button>
          <p style={{ fontWeight: "300" }}>ex</p> EXPRESS
        </button>
        <button>
          <FaJava />
          JAVA
        </button>
        <button>
          <IoIosFlash />
          CHAKRAUI
        </button>
        <button>
          <FaGitAlt />
          GIT
        </button>
        <button>
          <SiMongodb />
          MONGODB
        </button>
        <button>
          <BsTriangleFill />
          VERCEL
        </button>
      </div>
    </div>
  );
};

export default Skills;
