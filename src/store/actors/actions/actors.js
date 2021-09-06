import * as actionTypes from './actionTypes';

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

export function initSearchActors(value, page) {
  return {
    type: actionTypes.INIT_SEARCH_ACTORS,
    page: page,
    value: value
  }
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

export function setTotalPages(pages) {
  return {
    type: actionTypes.SET_TOTAL_ACTORS_PAGES,
    payload: pages
  }
}

export function isLoading(boolean) {
  return {
    type: actionTypes.IS_LOADING_ACTORS,
    payload: boolean
  }
}

