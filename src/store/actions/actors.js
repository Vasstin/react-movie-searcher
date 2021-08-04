import * as actionTypes from './actionTypes';
import tmdbUrl from '../../utility/axios';
import apiKey from '../../utility/apiKey';

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


export function fetchActors() {
  return dispatch => {
    tmdbUrl.get(`person/popular?${apiKey}&language=en-US&page=1`)
      .then(results => {
        const res = results.data.results;
        dispatch(setActors(res))
      })
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

export function fetchActorCard(id) {
  return dispatch => {
    tmdbUrl.get(`person/${id}?${apiKey}&language=en-US`)
      .then(results => {
        const res = results.data;
        dispatch(setActorCard(res))
      })
  }
}