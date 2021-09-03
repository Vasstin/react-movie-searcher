import { put, takeEvery } from 'redux-saga/effects';
import apiKey from '../../../utility/apiKey';
import tmdbUrl from '../../../utility/axios';
// import { /*fetchActors, fetchActorCard,*/ searchActors } from '../actions/index';
import * as actions from '../actions/index'
import * as actionTypes from '../actions/actionTypes'


function* fetchActors(page) {
  const response = yield tmdbUrl.get(`person/popular?${apiKey}&language=en-US&page=${page.page}`)
  yield put(actions.setActors(response.data.results))
  yield put(actions.setTotalPages(response.data.total_pages))
}

function* fetchActorCard(id) {
  const response = yield tmdbUrl.get(`person/${id.id}?${apiKey}&language=en-US`)
  yield put(actions.setActorCard(response.data))
}

function* searchActors(value, page = 1) {
  if (value.value !=='') {
    const response = yield  tmdbUrl.get(`search/person?${apiKey}&query=${value.value}`)
    yield put(actions.cleanActors())
    yield put(actions.setActors(response.data.results))
    yield put(actions.setTotalPages(response.data.total_pages))
  } else {
    const response = yield tmdbUrl.get(`person/popular?${apiKey}&language=en-US&page=${page.page}`)
    yield put(actions.cleanActors())
    yield put(actions.setActors(response.data.results))
    yield put(actions.setTotalPages(response.data.total_pages)) 
  }
}

export default function* watchActors() {
  yield takeEvery(actionTypes.FETCH_ACTORS, fetchActors)
  yield takeEvery(actionTypes.FETCH_ACTOR_CARD, fetchActorCard)
  yield takeEvery(actionTypes.INIT_SEARCH_ACTORS, searchActors)
}

