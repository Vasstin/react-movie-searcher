import * as actionTypes from '../../actors/actions/actionTypes';

const initialState = {
  actors: [],
  actorCard: [],
  totalPages: '',
  currentPage: '',
  search: ''
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
    case actionTypes.SET_TOTAL_ACTORS_PAGES:
      return { ...state, totalPages: action.payload}
    case actionTypes.SEARCH_VALUE:
      return { ...state, search: action.payload}
    default: return state
  }
}

export default actorsReducer;