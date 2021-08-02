import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from './Navigation/Navigation';
import Movies from './Cards/Movies';
import Actors from './Cards/Actors';

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
      </Switch>
    </div>
    
  )
};

export default MainPage;
