import * as actionTypes from './actionTypes';
import tmdbUrl from '../../axios';

// tmdbUrl.get('movie/popular?api_key=1fe2b672392f0b598d63021cfed3b95e&language=en-US&page=1')
//       .then(results => {
//         const res = results.data.results;
//         setMovies(res)
//       })
export function setMovies(movies) {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies
  }
}

export function cleanMovies(clean = []) {
  return {
    type: actionTypes.CLEAN_MOVIES,
    payload: clean
  }
}

export function fetchMovies() {
  return dispatch => {
    tmdbUrl.get('movie/popular?api_key=1fe2b672392f0b598d63021cfed3b95e&language=en-US&page=1')
      .then(results => {
        const res = results.data.results;
        dispatch(setMovies(res))
      })
  }
}