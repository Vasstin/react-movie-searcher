import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from "react-router";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NavigationItem from './NavigationItem/NavigationItem';
import * as actionsMovies from '../../store/movies/actions/index';
import * as actionsActors from '../../store/actors/actions/index';

const useStyles = makeStyles((theme) => ({
  
  titleText: {
    margin: 0,
    paddingTop: '20px',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
  },
}));

const Navigation = props => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const onSearchMovies = useCallback((value) => dispatch(actionsMovies.initSearchMovies(value)), [dispatch])
  const onSearchActors = useCallback((value) => dispatch(actionsActors.initSearchActors(value)), [dispatch])
  
  const pathes = {
    '/actors': (event) => onSearchActors(event.target.value),
    '/movies': (event) => onSearchMovies(event.target.value)
  }
  
  // if(props.location.pathname === '/actors') {
  //   onSearch = useCallback((value) => dispatch(actions.searchActors(value)), [dispatch])
  // } else if(props.location.pathname === '/movies') {
  //   onSearch = useCallback((value) => dispatch(actions.searchMovies(value)), [dispatch])
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <p className = {classes.titleText} >The Movie Searcher is here!</p>
        <Toolbar className = {classes.navBar}>
          <ul className = {classes.navList}>
          <NavigationItem link = "/actors">ACTORS</NavigationItem>
          <NavigationItem link = "/movies">MOVIES</NavigationItem>
          </ul>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange = {pathes[props.location.pathname]}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navigation);