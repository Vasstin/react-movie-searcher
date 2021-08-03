import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import NewCard from './NewCard';
import * as actions from '../../store/actions/index'


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

  const movies = useSelector(state => {
    return state.movies.movies
  })

  const onFetchMovies = useCallback(() => dispatch(actions.fetchMovies()), [dispatch])
  const onCleanMovies = useCallback(() => dispatch(actions.cleanMovies()), [dispatch])

  useEffect(() => {
    onFetchMovies()
    return  () => {
      onCleanMovies()
    }
  }, [onFetchMovies, onCleanMovies]);

  return (
    <div className = {classes.root}>
      {movies.map(item => {
        return <NewCard 
        data = {item} 
        title = {item.title} 
        cardImage = {item.poster_path} 
        key = {item.id}
        personid = {item.id}/>
        })
      }
    </div>
   
  )
});


export default Cards;
