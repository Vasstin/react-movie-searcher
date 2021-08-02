import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movies: []
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES: 
      return { ...state, movies: [...state.movies, ...action.payload]}
    case actionTypes.CLEAN_MOVIES:
      return { ...state, movies: action.payload}
    default: return state
  }
}

export default moviesReducer;