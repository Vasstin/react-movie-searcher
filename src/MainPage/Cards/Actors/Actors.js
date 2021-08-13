import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

import NewCard from '../NewCard';
import * as actions from '../../../store/actions/index'


//изменить на moviesContainer
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  media: {
    height: 140,
  },
  pagination: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
}));


const Cards = React.memo(props => {
  const classes = useStyles();

  const [page, setPage] = useState(localStorage.getItem('ActorsPage'));
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  

  const dispatch = useDispatch()

  
  const actors = useSelector(state => {
    return state.actors.actors
  })

  const pages = useSelector(state => {
    return state.actors.totalPages
  })

  const onFetchActors = useCallback(() => dispatch(actions.fetchActors(page)), [dispatch, page])
  const onCleanActors = useCallback(() => dispatch(actions.cleanActors()), [dispatch])

  let history = useHistory();

  function handleClick(id) {
    history.push("/actorcard", {id});
  }

  useEffect(() => {
    onFetchActors()
    localStorage.setItem('ActorsPage', page)

    return  () => {
      onCleanActors()
    }
  }, [onFetchActors, onCleanActors, page]);
 
  
  return (
    <div className = {classes.root}>
      {actors.map(item => {
        return <NewCard 
          data = {item} 
          title = {item.title ?? item.name} 
          cardImage = {item.profile_path} 
          key = {item.id}
          personid = {item.id}
          redirect = {() => handleClick(item.id)}
          />
        })
      }
      <Pagination className = {classes.pagination}   count={pages}  handleChange = {handleChange}/>
    </div>
   
  )
});


export default Cards;
