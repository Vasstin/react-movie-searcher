import { takeEvery } from 'redux-saga/effects'
import { fetchActors, fetchActorCard, searchActors } from '../actions/index'
import * as actionTypes from '../actions/actionTypes'




export default function* watchActors() {
  yield takeEvery(actionTypes.FETCH_ACTORS, fetchActors)
  yield takeEvery(actionTypes.FETCH_ACTOR_CARD, fetchActorCard)
  yield takeEvery(actionTypes.INIT_SEARCH_ACTORS, searchActors)
}

