import React from "react";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navItem: {
    marginRight: '40px',
    textDecoration: 'none',
    color: '#fff'
  }
})
const NavigationItem = props => {
  const classes = useStyles()
  return (
    <li >
      <NavLink className = {classes.navItem} to = {props.link}>{props.children}</NavLink>
    </li>
  )
  
};

export default NavigationItem;
