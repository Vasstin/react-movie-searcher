import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: 'center',
    maxWidth: '80%',
    margin: 15,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15
  },
  cardMedia: {
    maxWidth: 325,
    borderRadius: 5
  }
  
});



const DetailPage = props => {
  const classes = useStyles();
  // let text = props.overview

  // if (text.length > 100) {
  //   text = 'working'
  // }
  console.log(props)
  return ( 
    <Card className={classes.root}>
      <CardMedia
        className = {classes.cardMedia}
        component="img"
        alt={props.name ?? props.title}
        height="400"
        image={`https://image.tmdb.org/t/p/w500/${props.movieImage ?? props.actorImage}`}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name ?? props.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="p">
          {props.birthday ?? props.releaseDate}
        </Typography>
        <Typography variant="body2" color="inherit" component="p">
          {props.bio ?? props.overview}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default DetailPage;
