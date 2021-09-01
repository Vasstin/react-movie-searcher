import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
//import thunk from 'redux-thunk'

import { watchFetchMovies } from './store/movies/sagas/sagas'
import './index.css';
import App from './App';
import moviesReducer from './store/reducers/moviesReducer';
import actorsReducer from './store/reducers/actorsReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  actors: actorsReducer,
  // search: searchReducer
})

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();
  
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)) 
)
sagaMiddleware.run(watchFetchMovies)

const app = (
  <Provider store = {store}>
    <BrowserRouter>
      <App />    
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);


