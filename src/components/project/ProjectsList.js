import React from 'react'
import ProjectCard from './ProjectCard'
import { Container } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import {projects} from '../../data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}));

export default function ProjectsList() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
        {projects.data.map(project => {
                      return (
                        <div>
                        <ProjectCard project={project}/>
                        <p/>
                        </div>
                      );
            })}
        </Container>
    )
}
