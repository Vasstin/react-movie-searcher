import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import NewCard from '../NewCard';
import * as actions from '../../../store/actions/index'
import PagePagination from '../../../utility/PagePagination';
import Spinner from '../../../utility/Spinner'
// import Navigation from '../../Navigation/Navigation'


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
  spinner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


const Cards = React.memo(props => {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  
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
    history.push("/actors/" + id, {id});
  }

  useEffect(() => {
    setTimeout(() => {
      onFetchActors(page)
    }, 1000)
    
    return  () => {
      onCleanActors()
    }
  }, [onFetchActors, onCleanActors, page]);

  let actorsMap = (
    <div>
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
      })}
      </div>
        <PagePagination 
          page = {page} 
          count={pages} 
          changer = {handleChange} 
        />
      </div>
  )

  if(actors.length  === 0) {
    actorsMap = <Spinner/>
  } 

  return (
    <div>
      {actorsMap}
    </div>
  )
});


export default Cards;
