import React, { Component } from 'react';
import Header from '../components/header/header';
import ProjectsList from '../components/project/ProjectsList';

class Projects extends Component {
  render() {
    return (
      <div>
          <Header/>
          <h1>Projects</h1>
          <ProjectsList/>
      </div>
    );
  }
}

export default Projects;
