import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import tmdbUrl from '../../axios'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ActorCard = props => {
  const classes = useStyles();

  const [actorCard, setActorCard] = useState()
   
 

  useEffect(() => {
    const id = props.location.state.id
    tmdbUrl.get(`person/${id}?api_key=1fe2b672392f0b598d63021cfed3b95e&language=en-US`)
    .then(results => {
      const res = results.data
      setActorCard(res)
      }
    ) 
  }, [props.location.state.id])
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
         //alt={actorCard.name}
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
         //title={actorCard.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {actorCard.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    
  );
};

export default ActorCard;
