import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/actions/index'
import DetailPage from '../DetailPage';



const MovieCard = props => {

  const dispatch = useDispatch()
  const movieCard = useSelector(state => {
    return state.movies.movieCard
  })
  console.log(props)
  // const { id } = props.location.state
  // const onFetchMovieCard = useCallback(() => dispatch(actions.fetchMovieCard(id)), [dispatch])
  // const onCleanMovieCard = useCallback(() => dispatch(actions.cleanMovieCard()), [dispatch])
  
  // useEffect(() => {
  //   onFetchMovieCard()
  //   return  () => {
  //     onCleanMovieCard()
  //   }
  // }, [onFetchMovieCard, onCleanMovieCard])
  return (
    <DetailPage 
      
    />
  );
};

export default MovieCard;
