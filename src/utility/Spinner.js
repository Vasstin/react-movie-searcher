import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30vh'
  }
}));

const Spinner = props => {
  let classes = useStyles()
  return (
    <CircularProgress size = {70} className = {classes.root}/>
  )
};

export default Spinner;
