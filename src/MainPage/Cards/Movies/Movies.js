import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import NewCard from '../NewCard';
import * as actions from '../../../store/movies/actions/index'
import PagePagination from '../../../utility/PagePagination';
import Spinner from '../../../utility/Spinner'

// import Navigation from '../../Navigation/Navigation'

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


const Movies = React.memo(props => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };


  const movies = useSelector(state => {
    return state.movies.movies
  })

  const isLoading = useSelector(state => {
    return state.movies.isLoading
  })

  const pages = useSelector(state => {
    return state.movies.totalPages
  })

  // const search = useSelector(state => {
  //   return state.movies.search
  // })

  const onFetchMovies = useCallback((page) => dispatch(actions.initFetchMovies(page)), [dispatch])
  const onCleanMovies = useCallback(() => dispatch(actions.cleanMovies()), [dispatch])
  const onLoading = useCallback(() => dispatch(actions.isLoading(false)), [dispatch])
  // const onSearchMovies = useCallback((value) => dispatch(actions.searchMovies(value)), [dispatch])
  
  useEffect(() => {
    setTimeout(() => {
      onFetchMovies(page)
    }, 500)
    
    return  () => {
      onCleanMovies()
      onLoading(false)
    }
  }, [onFetchMovies, onCleanMovies, onLoading, page]);

  let history = useHistory();

  function handleClick(id) {
    history.push("/movies/" + id, {id});
  }

  let moviesMap = "";

  if(isLoading === false) {
    moviesMap = <Spinner/>
  } else {
    moviesMap = (
      <div>
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
  }
    return (
     <div>
       {moviesMap}
     </div>
  )
});


export default Movies;
