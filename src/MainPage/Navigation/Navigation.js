import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
//import MenuIcon from '@material-ui/icons/Menu';
import { alpha, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NavigationItem from './NavigationItem/NavigationItem';

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
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;