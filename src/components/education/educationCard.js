import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { education } from "../../data";
import './education.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EducationCard() {
  const classes = useStyles();

  return (
    <div>
      {education.data.map((edu) => {
        return (
          <div className="card">
          <div className="imageCard">
              <img
                src={require(`../../assets/icons/${edu.image}.png`)}
                alt="react"
                height="auto"
                width="120"
              />
            </div>
            <p className={classes.root}>
              <div>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {edu.place}
                </Typography>
                <Typography variant="h5" component="h2">
                  {edu.name}
                </Typography>
                <p />
                <Typography variant="body2" component="p">
                  {edu.description}
                  <p />
                </Typography>
              </div>
            </p>
            <p />
          </div>
          
        );
      })}
    </div>
  );
}
