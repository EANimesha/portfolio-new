import React, { Component } from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../data";
import "./greeting.css";
import emoji from "react-easy-emoji";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

class Greeting extends Component {
  render() {
    return (
      <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className="greeting-text">
                  Hi! I am Nimesha Dilini{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>{" "}
                </h1>
                <h2 className="greeting-nickname">
                  Software Engineering Undergraduate
                </h2>
                <p className="greeting-text-p subTitle">{greeting.desc}</p>
                {/* <SocialMedia /> */}
                {/* <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              </div> */}
              </div>
            </div>
            <div className="greeting-image-div">
              <img
                src={require("../../assets/images/video.gif")}
                alt="loading..."
              />
              <p></p>
              <div>
                +94 778357967 
                <br></br>nimeshadilini999@gmail.com
              </div>
              <p></p>
              <div>
                <a href="facebook.com/eandilini">
                  <FacebookIcon style={{ fontSize: 50 }}></FacebookIcon>
                </a>
                <a href="https://www.linkedin.com/in/nimesha-dilini-33523314b">
                  <LinkedInIcon style={{ fontSize: 50 }}></LinkedInIcon>
                </a>

                <EmailIcon style={{ fontSize: 50 }}></EmailIcon>

                <a href="https://github.com/EANimesha?tab=repositories">
                  <GitHubIcon style={{ fontSize: 50 }}></GitHubIcon>
                </a>
              </div>
            </div>
            {/* <div className="greeting-image-div">
              <img
                alt="saad sitting on table"
                src={require("../../assets/images/pp.jpg")}
              ></img>
            </div> */}
          </div>
        </div>
      </Fade>
    );
  }
}

export default Greeting;
