import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from './Navigation/Navigation';
import Movies from './Cards/Movies/Movies';
import Actors from './Cards/Actors/Actors';
import ActorCard from './Cards/Actors/ActorCard'
import MovieCard from './Cards/Movies/MovieCard'

const MainPage = props => {
  return ( 
    <div>
      <Navigation />
      <Switch>
        <Route exact path = '/'>
          <Redirect to = '/movies'></Redirect>
        </Route>
        <Route path = '/actors' component = {Actors}></Route>
        <Route path = '/movies' component = {Movies}></Route>
        <Route path = '/actorcard' component = {ActorCard}></Route>
        <Route path = '/moviecard' component = {MovieCard}></Route>
      </Switch>
    </div>
    
  )
};

export default MainPage;
