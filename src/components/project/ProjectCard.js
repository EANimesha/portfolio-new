import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'linear-gradient(45deg, #e8d492 30%, #fcb590 90%)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
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
        <Typography variant="body2" component="p">
          well meaning and kindly.
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
          <p/>
        </Typography>
        <Button variant="contained" color="secondary"><a href={props.project.url}>Github Code</a></Button>
      </CardContent>
    </Card>
  );
}

