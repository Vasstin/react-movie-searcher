import { put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import tmdbUrl from '../../../utility/axios';
import apiKey from '../../../utility/apiKey';

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

export function* fetchMovies(page) {
    const response = yield tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page.page}`)
    yield put(setMovies(response.data.results))
    yield put(setTotalPages(response.data.total_pages))
}


export function* fetchMovieCard(id) {
  console.log(id)
    const response = yield tmdbUrl.get(`movie/${id.id}?${apiKey}&language=en-US`)
    yield put(setMovieCard(response.data))
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

export function* searchMovies(value, page = 1) {
  if (value.value !=='') {
    const response = yield tmdbUrl.get(`search/movie?${apiKey}&query=${value.value}`)
    yield put(cleanMovies())
    yield put(setMovies(response.data.results))
    yield put(setTotalPages(response.data.total_pages))
    
  } else {
    const response = yield tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page.page}`)
    yield put(cleanMovies())
    yield put(setMovies(response.data.results))
    yield put(setTotalPages(response.data.total_pages))
  } 
}