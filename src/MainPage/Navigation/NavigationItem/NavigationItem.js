import React from "react";
import { Link } from 'react-router-dom';
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
      <Link className = {classes.navItem} to = {props.link}>{props.children}</Link>
    </li>
  )
  
};

export default NavigationItem;
