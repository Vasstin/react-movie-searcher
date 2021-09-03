import { put, takeEvery } from 'redux-saga/effects'

import tmdbUrl from '../../../utility/axios';
import apiKey from '../../../utility/apiKey';
import * as actions from '../actions/index'
import * as actionTypes from '../actions/actionTypes'


function* fetchMovies(page) {
  const response = yield tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page.page}`)
  yield put(actions.setMovies(response.data.results))
  yield put(actions.setTotalPages(response.data.total_pages))
}


function* fetchMovieCard(id) {
console.log(id)
  const response = yield tmdbUrl.get(`movie/${id.id}?${apiKey}&language=en-US`)
  yield put(actions.setMovieCard(response.data))
}

function* searchMovies(value, page = 1) {
  if (value.value !=='') {
    const response = yield tmdbUrl.get(`search/movie?${apiKey}&query=${value.value}`)
    yield put(actions.cleanMovies())
    yield put(actions.setMovies(response.data.results))
    yield put(actions.setTotalPages(response.data.total_pages))
    
  } else {
    const response = yield tmdbUrl.get(`movie/popular?${apiKey}&language=en-US&page=${page.page}`)
    yield put(actions.cleanMovies())
    yield put(actions.setMovies(response.data.results))
    yield put(actions.setTotalPages(response.data.total_pages))
  } 
}

export default function* watchMovies() {
  yield takeEvery(actionTypes.FETCH_MOVIES, fetchMovies);
  yield takeEvery(actionTypes.FETCH_MOVIE_CARD, fetchMovieCard)
  yield takeEvery(actionTypes.INIT_SEARCH_MOVIES, searchMovies)
}
