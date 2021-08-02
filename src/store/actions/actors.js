import * as actionTypes from './actionTypes';
import tmdbUrl from '../../axios';

export function setActors(actors) {
  return {
    type: actionTypes.SET_ACTORS,
    payload: actors
  }
}

export function fetchActors() {
  return dispatch => {
    tmdbUrl.get('person/popular?api_key=1fe2b672392f0b598d63021cfed3b95e&language=en-US&page=1')
      .then(results => {
        const res = results.data.results;
        console.log(res)
        dispatch(setActors(res))
      })
  }
}