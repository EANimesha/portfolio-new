import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { education } from "../../data";

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
          <div>
            <Card className={classes.root}>
              <CardContent>
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
              </CardContent>
            </Card>
            <p />
            <div>
              <img
                src="https://www.pinclipart.com/picdir/middle/69-696279_arrows-clipart-clear-background-up-arrow-png-download.png"
                alt="react"
                height="80"
                width="80"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
