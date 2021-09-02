import { takeEvery } from 'redux-saga/effects'
import { fetchMovies, fetchMovieCard, searchMovies } from '../actions/index'
import * as actionTypes from '../actions/actionTypes'




export default function* watchMovies() {
  yield takeEvery(actionTypes.FETCH_MOVIES, fetchMovies);
  yield takeEvery(actionTypes.FETCH_MOVIE_CARD, fetchMovieCard)
  yield takeEvery(actionTypes.INIT_SEARCH_MOVIES, searchMovies)
}
// export function* watchFetchMovieCard() {
//   yield takeEvery(actionTypes.FETCH_MOVIE_CARD, fetchMovieCard)
// }

// export default function* rootSaga() {
//   yield all [
//     watchFetchMovies(),
//     watchFetchMovieCard()
//   ]
// }