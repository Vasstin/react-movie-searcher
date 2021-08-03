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
import DetailPage from './DetailPage';



const ActorCard = props => {

  const [actorCard, setActorCard] = useState([])
   
 
  const {id} = props.location.state

  useEffect(() => {
    tmdbUrl.get(`person/${id}?api_key=1fe2b672392f0b598d63021cfed3b95e&language=en-US`)
    .then(results => {
      const res = results.data
      setActorCard(res)
      }
    ) 
  }, [id])

  return (
    <DetailPage></DetailPage>
  );
};

export default ActorCard;
