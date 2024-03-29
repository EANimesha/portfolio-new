import React, { Component } from "react";
import { Flip, Fade } from "react-reveal";
import { skills } from "../../data";
import "./skill.css";

class SkillSection extends Component {
  render() {
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Flip left duration={2000}>
                <div className="skills-image-div">
                  <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img>
                </div>
              </Flip>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h3 className="skills-heading">{skill.title}</h3>
                </Fade>
                <Fade right duration={1500}>
                  {/* <SoftwareSkill logos={skill.softwareSkills} /> */}
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p className="subTitle skills-text">{skillSentence}</p>
                      );
                    })}
                  </div>
                </Fade>
                <Fade right duration={2500}>
                  <div>
                  {skill.icons.map((icon) => {
                      return (
                        <img
                      className="icon"
                      alt="Ashutosh is Analysing Data"
                      src={require(`../../assets/icons/${icon}.png`)}
                    ></img>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
