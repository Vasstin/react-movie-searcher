import * as actionTypes from './actionTypes';
import tmdbUrl from '../../utility/axios';
import apiKey from '../../utility/apiKey';


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

export function setTotalPages(pages) {
  return {
    type: actionTypes.SET_TOTAL_MOVIES_PAGES,
    payload: pages
  }
}



export function fetchMovies(page) {
  return dispatch => {
    tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page}`)
      .then(results => {
        const res = results.data.results ;
        const totalPages  = results.data.total_pages
        dispatch(setMovies(res))
        dispatch(setTotalPages(totalPages))
      })
  }
}

export function setMovieCard(movieId) {
  return {
    type: actionTypes.SET_MOVIE_CARD,
    payload: movieId
  }
}

export function cleanMovieCard(clean = []) {
  return {
    type: actionTypes.CLEAN_MOVIE_CARD,
    payload: clean
  }
} 

export function fetchMovieCard(id) {
  return dispatch => {
    tmdbUrl.get(`movie/${id}?${apiKey}&language=en-US`)
      .then(results => {
        const res = results.data;
        dispatch(setMovieCard(res))
      })
  }
}

// export function searchValue (value) {
//   return {
//     type: actionTypes.SEARCH_VALUE,
//     payload: value
//   }
// }

export function searchMovies(value, page) {
  console.log(page)
  if (value !=='') {
    return dispatch => {
      tmdbUrl.get(`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${value}`)
        .then(results => {
          const res = results.data.results ;
          // const totalPages  = results.data.total_pages
          dispatch(cleanMovies())
          dispatch(setMovies(res))
          // dispatch(setTotalPages(totalPages))
        })
    }
  } else {
    return dispatch => {
      tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page}`)
        .then(results => {
          const res = results.data.results ;
          const totalPages  = results.data.total_pages
          dispatch(cleanMovies())
          dispatch(setMovies(res))
          dispatch(setTotalPages(totalPages))
        })
    }
  }
  
}