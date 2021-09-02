import { put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import tmdbUrl from '../../../utility/axios';
import apiKey from '../../../utility/apiKey';

export function initFetchActors(page) {
  return {
    type: actionTypes.FETCH_ACTORS,
    page: page
  }
}

export function getActorCard(id) {
  return {
    type: actionTypes.FETCH_ACTOR_CARD,
    id: id
  }
} 

export function* fetchActors(page) {
  const response = yield tmdbUrl.get(`person/popular?${apiKey}&language=en-US&page=${page.page}`)
  yield put(setActors(response.data.results))
  yield put(setTotalPages(response.data.total_pages))
}

export function* fetchActorCard(id) {
  const response = yield tmdbUrl.get(`person/${id.id}?${apiKey}&language=en-US`)
  yield put(setActorCard(response.data))
}

export function setActors(actors) {
  return {
    type: actionTypes.SET_ACTORS,
    payload: actors
  }
}

export function cleanActors(clean = []) {
  return {
    type: actionTypes.CLEAN_ACTORS,
    payload: clean
  }
} 


export function setTotalPages(pages) {
  return {
    type: actionTypes.SET_TOTAL_ACTORS_PAGES,
    payload: pages
  }
}

export function setActorCard(actorInf) {
  return {
    type: actionTypes.SET_ACTOR_CARD,
    payload: actorInf
  }
}

export function cleanActorCard(clean = []) {
  return {
    type: actionTypes.CLEAN_ACTOR_CARD,
    payload: clean
  }
} 

export function initSearchActors(value, page) {
  return {
    type: actionTypes.INIT_SEARCH_ACTORS,
    page: page,
    value: value
  }
}

export function* searchActors(value, page = 1) {
  if (value.value !=='') {
    const response = yield  tmdbUrl.get(`search/person?${apiKey}&query=${value.value}`)
    yield put(cleanActors())
    yield put(setActors(response.data.results))
    yield put(setTotalPages(response.data.total_pages))
  } else {
    const response = yield tmdbUrl.get(`person/popular?${apiKey}&language=en-US&page=${page.page}`)
    yield put(cleanActors())
    yield put(setActors(response.data.results))
    yield put(setTotalPages(response.data.total_pages)) 
  }
}