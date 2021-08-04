import * as actionTypes from '../actions/actionTypes';

const initialState = {
  actors: [],
  actorCard: []
}

const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTORS: 
      return { ...state, actors: [...state.actors, ...action.payload]}
    case actionTypes.CLEAN_ACTORS:
      return { ...state, actors: action.payload}
    case actionTypes.SET_ACTOR_CARD:
      return { ...state, actorCard: action.payload}
    case actionTypes.CLEAN_ACTOR_CARD:
      return { ...state, actorCard: action.payload}
    default: return state
  }
}

export default actorsReducer;