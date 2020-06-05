import React, { Component } from "react";
import Header from "../components/header/header";
import Greeting from "../components/greeting/greeting";
import Skills from "../components/skill/skills";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
      </div>
    );
  }
}

export default Home;
