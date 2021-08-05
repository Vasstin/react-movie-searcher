import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: 15,
  },
  cardArea: {
    display: "flex",
    width: '100%',
    height: 550,
    
  },
  media: {
    maxWidth: 325,
    height: 500,
    margin: 15,
    borderRadius: 5
  }, 
  content: {
    alignSelf: 'flex-start'
  }
});



const DetailPage = props => {
  const classes = useStyles();

  return ( 
    <Card className={classes.root} >
      <CardActionArea className = {classes.cardArea} >
        <CardMedia
          className = {classes.media}
          component="img"
          alt={props.name ?? props.title}
          image={`https://image.tmdb.org/t/p/w500/${props.movieImage ?? props.actorImage}`}
          title={props.name}
          
        />
        <CardContent className = {classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name ?? props.title}
          </Typography>
          <Typography variant="body2" color="inherit" component="p">
            {props.bio ?? props.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default DetailPage;
