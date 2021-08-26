import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: 15
  },
  cardArea: {
    display: "flex",
    flexDirection: 'column',
  }, 
  link: {
    textDecoration: "none",
    color: 'inherit'
  },
  cardMedia: {
    width: '325px'
  }
});



const NewCard = props => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} onClick = {() => props.redirect()}>
        <CardActionArea className = {classes.cardArea}>
          <CardMedia className = {classes.cardMedia}
            height = "500"
            component = 'img'
            image = {'https://image.tmdb.org/t/p/w500/' + props.cardImage}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
};

export default NewCard;
