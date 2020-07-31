import React from 'react'
import Header from '../components/header/header'
import EducationCard from '../components/education/educationCard';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
  }));

export default function Education() {
    const classes = useStyles();

    return (
        <div>
            <Header/>
            <h1>Education</h1>
            <div className={classes.root}>
            <EducationCard/>
            </div>
        </div>
    )
}
