import React from "react";
import Navigation from './Navigation/Navigation';
import Actors from './Card/Actors';

const MainPage = props => {
  return ( 
    <div>
      <Navigation />
      <Actors></Actors>
    </div>
    
  )
};

export default MainPage;
