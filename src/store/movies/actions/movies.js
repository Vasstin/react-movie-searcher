import * as actionTypes from './actionTypes';


export function initFetchMovies(page) {
  return {
    type: actionTypes.FETCH_MOVIES,
    page: page
  }
}

export function getMovieCard(id) {
  return {
    type: actionTypes.FETCH_MOVIE_CARD,
    id: id
  }
}

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

export function initSearchMovies(value, page) {
  return {
    type: actionTypes.INIT_SEARCH_MOVIES,
    page: page,
    value: value
  }
}

export function isLoading(boolean) {
  return {
    type: actionTypes.IS_LOADING_MOVIES,
    payload: boolean
  }
}