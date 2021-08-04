import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import moviesReducer from './store/reducers/moviesReducer';
import actorsReducer from './store/reducers/actorsReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  actors: actorsReducer
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

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


