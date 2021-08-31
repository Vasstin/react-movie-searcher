import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';


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

const imgPath = 'https://image.tmdb.org/t/p/w500/';

/*<Skeleton variant="rect" width={325} height={500} className={classes.root} /> */

const NewCard = props => {
  const classes = useStyles();
  
  let cardMedia = (
    <CardMedia className = {classes.cardMedia}
      height = "500"
      component = 'img'
      image = {imgPath + props.cardImage}
      title={props.title}
    />
  )

  if(props.cardImage === null) {
    cardMedia = <Skeleton variant="rect" width={325} height={500} className={classes.cardMedia} />
  }
  
  return (
    <Card className={classes.root} onClick = {() => props.redirect()}>
        <CardActionArea className = {classes.cardArea}>
          {cardMedia}
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
