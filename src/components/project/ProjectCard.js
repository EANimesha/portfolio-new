import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #e8d492 30%, #fcb590 90%)',
    padding:'2%',
    width:'80%'
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
        {props.project.date}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.project.name}
        </Typography>
        <p/>
        <div>
        {props.project.languages.map(language=>{
            return(
                <img  src={require(`../../assets/icons/${language}.png`)} alt="react" height="80" width="80"/>
            )
        })}
        </div>
        <CardContent>
        <Typography variant="body2" component="p" >
          {props.project.description}
          <p/>
        </Typography>
        </CardContent>
        <Button variant="contained" color="secondary"><a href={props.project.url}>Github Code</a></Button>
      </CardContent>
    </Card>
  );
}

