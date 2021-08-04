import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
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
  link: {
    textDecoration: "none",
    color: 'inherit'
  }
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
  
  let history = useHistory();

  function handleClick() {
    history.push("/moviecard");
  }
  return (
    <div className = {classes.root}>
      {movies.map(item => {
        return (
          // <Link className = {classes.link} to = {{
          //   pathname: '/moviecard',
          //   state: {id: item.id}
          // }}>
            <NewCard 
              data = {item} 
              title = {item.title ?? item.name} 
              cardImage = {item.poster_path} 
              key = {item.id}
              personid = {item.id}
              redirect = {() => handleClick(item.id)} />)
        // </Link> )
        })
      }
    </div>
   
  )
});


export default Cards;
