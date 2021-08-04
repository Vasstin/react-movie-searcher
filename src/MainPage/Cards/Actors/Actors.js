import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

import NewCard from '../NewCard';
import * as actions from '../../../store/actions/index'


//изменить на moviesContainer
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  media: {
    height: 140,
  },
});


const Cards = React.memo(props => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const actors = useSelector(state => {
    return state.actors.actors
  })

  const onFetchActors = useCallback(() => dispatch(actions.fetchActors()), [dispatch])
  const onCleanActors = useCallback(() => dispatch(actions.cleanActors()), [dispatch])

  let history = useHistory();

  function handleClick(id) {
    history.push("/actorcard", {id});
  }

  useEffect(() => {
    onFetchActors()
    return  () => {
      onCleanActors()
    }
  }, [onFetchActors, onCleanActors]);
 
  
  return (
    <div className = {classes.root}>
      {actors.map(item => {
        return <NewCard 
          data = {item} 
          title = {item.title ?? item.name} 
          cardImage = {item.profile_path} 
          key = {item.id}
          personid = {item.id}
          redirect = {() => handleClick(item.id)}
          />
        })
      }
    </div>
   
  )
});


export default Cards;
