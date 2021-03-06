import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/movies/actions/index'
import DetailPage from '../DetailPage';



const MovieCard = props => {

  const dispatch = useDispatch()
  const movieCard = useSelector(state => {
    return state.movies.movieCard
  })
  const { id } = props.location.state
  const onFetchMovieCard = useCallback((id) => dispatch(actions.getMovieCard(id)), [dispatch])
  const onCleanMovieCard = useCallback(() => dispatch(actions.cleanMovieCard()), [dispatch])

  useEffect(() => {
    onFetchMovieCard(id)
    return  () => {
      onCleanMovieCard()
    }
  }, [onFetchMovieCard, onCleanMovieCard, id])
  return (
    <DetailPage 
      title = {movieCard.title} 
      movieImage = {movieCard.poster_path}
      overview = {movieCard.overview}
      background = {movieCard.backdrop_path}
      releaseDate = {movieCard.release_date}
    />
  );
};

export default MovieCard;
