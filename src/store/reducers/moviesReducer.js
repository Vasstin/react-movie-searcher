import * as actionTypes from '../actions/actionTypes';

const initialState = {
  movies: [],
  movieCard: [],
  totalPages: ''
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIES: 
      return { ...state, movies: [...state.movies, ...action.payload]}
    case actionTypes.CLEAN_MOVIES:
      return { ...state, movies: action.payload}
    case actionTypes.SET_MOVIE_CARD:
      return { ...state, movieCard: action.payload}
    case actionTypes.CLEAN_MOVIE_CARD:
      return { ...state, movieCard: action.payload}
    case actionTypes.SET_TOTAL_MOVIES_PAGES:
      return { ...state, totalPages: action.payload}
    default: return state
  }
}

export default moviesReducer;