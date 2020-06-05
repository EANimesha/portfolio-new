import React, { Component } from "react";
import { Fade } from "react-reveal";
import SkillSection from "./skillSection";

class Skills extends Component {
  render() {
    return (
      <div>
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header">What I Do?</h1>
        </Fade>
        <SkillSection/>
      </div>
    );
  }
}

export default Skills;
