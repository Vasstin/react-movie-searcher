import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

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

  useEffect(() => {
    onFetchActors()
    return  () => {
      onCleanActors()
    }
  }, [onFetchActors, onCleanActors]);
  // const fetchPerson = (id) => {
  //   tmdbUrl.get(`person/${id}?api_key=1fe2b672392f0b598d63021cfed3b95e&language=en-US`)
  //   .then(results => {
  //     const res = results.data
  //     }
  //     ) 
  // }
  
  return (
    <div className = {classes.root}>
      {actors.map(item => {
        return <NewCard 
          data = {item} 
          title = {item.title ?? item.name} 
          cardImage = {item.profile_path} 
          key = {item.id}
          personid = {item.id}
          />
        })
      }
    </div>
   
  )
});


export default Cards;
