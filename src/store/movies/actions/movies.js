import * as actionTypes from './actionTypes';
import tmdbUrl from '../../../utility/axios';
import apiKey from '../../../utility/apiKey';
import {all, fork, put, call, takeLatest} from 'redux-saga/effects';

export function* setMovies(movies) {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies
  }
}

export function* cleanMovies(clean = []) {
  return {
    type: actionTypes.CLEAN_MOVIES,
    payload: clean
  }
}

export function* setTotalPages(pages) {
  return {
    type: actionTypes.SET_TOTAL_MOVIES_PAGES,
    payload: pages
  }
}

export function initFetchMovies() {
  return {
    type: actionTypes.FETCH_MOVIES
  }
}

export function* fetchMovies(page) {
    tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page}`)
      .then(results => {
        console.log(results.data)
        // const res = results.data.results ;
        // const totalPages  = results.data.total_pages
        // yield put(setMovies(res))
        // yield put(setTotalPages(totalPages))
      })
}

// export function setMovieCard(movieId) {
//   return {
//     type: actionTypes.SET_MOVIE_CARD,
//     payload: movieId
//   }
// }

// export function cleanMovieCard(clean = []) {
//   return {
//     type: actionTypes.CLEAN_MOVIE_CARD,
//     payload: clean
//   }
// } 

// export function fetchMovieCard(id) {
//   return dispatch => {
//     tmdbUrl.get(`movie/${id}?${apiKey}&language=en-US`)
//       .then(results => {
//         const res = results.data;
//         dispatch(setMovieCard(res))
//       })
//   }
// }

// export function searchMovies(value, page) {
//   if (value !=='') {
//     return dispatch => {
//         tmdbUrl.get(`search/movie?${apiKey}&query=${value}`)
//         .then(results => {
//           const res = results.data.results ;
//           // const totalPages  = results.data.total_pages
//           dispatch(cleanMovies())
//           dispatch(setMovies(res))
//         })
   
//     }
//   } else {
//     return dispatch => {
//       tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page}`)
//         .then(results => {
//           const res = results.data.results ;
//           const totalPages  = results.data.total_pages
//           dispatch(cleanMovies())
//           dispatch(setMovies(res))
//           dispatch(setTotalPages(totalPages))
//         })
//     }
//   }
  
// }