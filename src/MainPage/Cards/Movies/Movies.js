import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';

import NewCard from '../NewCard';
import * as actions from '../../../store/actions/index'
import PagePagination from '../../../utility/PagePagination'

//изменить на moviesContainer


const useStyles = makeStyles((theme) => ({
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
}));


const Cards = React.memo(props => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };


  const movies = useSelector(state => {
    return state.movies.movies
  })

  const pages = useSelector(state => {
    return state.movies.totalPages
  })

  const search = useSelector(state => {
    return state.movies.search
  })

  const onFetchMovies = useCallback(() => dispatch(actions.fetchMovies(page)), [dispatch, page])
  const onSearchMovies = useCallback((value) => dispatch(actions.searchMovies(value, page)), [dispatch])
  const onCleanMovies = useCallback(() => dispatch(actions.cleanMovies()), [dispatch])
  
  useEffect(() => {
    onFetchMovies(page)

    return  () => {
      onCleanMovies()
    }
  }, [onFetchMovies, onCleanMovies, page]);

  let history = useHistory();

  function handleClick(id) {
    history.push("/moviecard", {id});
  }
   
    return (
     <div>
       <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange = {(event) => onSearchMovies(event.target.value)}
            />
       <div className = {classes.root}>
         {movies.map(item => {
           return (
              <NewCard 
                data = {item} 
                title = {item.title} 
                cardImage = {item.poster_path} 
                key = {item.id}
                personid = {item.id}
                redirect = {() => handleClick(item.id)} 
              />)
           })
         }
       </div>
       <PagePagination 
         page = {page} 
         count={pages} 
         changer = {handleChange} 
       />
     </div>
  )
});


export default Cards;
