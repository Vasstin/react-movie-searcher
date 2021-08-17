// import * as actionTypes from './actionTypes';
// import tmdbUrl from '../../utility/axios';
// import apiKey from '../../utility/apiKey';

// export function searchValue (value) {
//   return {
//     type: actionTypes.SEARCH_VALUE,
//     payload: value
//   }
// }

// export function setSearch(searh) {
//   return {
//     type: actionTypes.SET_SEARCH,
//     payload: searh
//   }
// }

// export function searchMovies(value) {
//   return dispatch => {
//     tmdbUrl.get(`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${value}`)
//       .then(results => {
//         console.log(results.data)
//         // const totalPages  = results.data.total_pages
//         // dispatch(setSearch(res))
//         // dispatch(setTotalPages(totalPages))
//       })
//   }
// }