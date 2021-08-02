import * as actionTypes from '../actions/actionTypes';

const initialState = {
  actors: []
}

const actorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTORS: 
      return { ...state, actors: [...state.actors, ...action.payload]}
    case actionTypes.CLEAN_ACTORS:
      return { ...state, actors: action.payload}
    default: return state
  }
}

export default actorsReducer;