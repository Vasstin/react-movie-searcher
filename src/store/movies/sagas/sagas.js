import { put, takeEvery, all } from 'redux-saga/effects'
import { fetchMovies } from '../actions/index'
import * as actionTypes from '../actions/actionTypes'

export function* watchFetchMovies() {
  yield takeEvery(actionTypes.FETCH_MOVIES, fetchMovies)
}

export default function* rootSaga() {
  yield all [
    watchFetchMovies()
  ]
}