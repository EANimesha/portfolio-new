import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import {greeting} from '../../data';
import './greeting.css';
import emoji from "react-easy-emoji";
import {} from '@material-ui/core/Icon';

class Greeting extends Component {
  render() {
    return (
        <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className="greeting-text">Hi! I am Nimesha Dilini <span className="wave-emoji">{emoji("👋")}</span> </h1>
                <h2 className="greeting-nickname">( {greeting.subtitle} )</h2>
                <p className="greeting-text-p subTitle">{greeting.desc}</p>
                {/* <SocialMedia /> */}
                {/* <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              </div> */}
              </div>
            </div>
            <div className="greeting-image-div">
             <img src={require('../../assets/images/video.gif')} alt="loading..." />
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
