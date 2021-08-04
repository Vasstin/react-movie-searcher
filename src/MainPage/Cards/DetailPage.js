import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: 15
  },
  cardArea: {
    display: "flex",
    flexDirection: 'column',
  }
});



const DetailPage = props => {
  const classes = useStyles();

  return ( 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
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
          <Typography variant="body2" color="inherit" component="p">
            {props.bio ?? props.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default DetailPage;
