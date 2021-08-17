import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/actions/index'
import DetailPage from '../DetailPage';



const ActorCard = props => {

  const dispatch = useDispatch()
  const actorCard = useSelector(state => {
    return state.actors.actorCard
  })
  
  const { id } = props.location.state
  const onFetchActorCard = useCallback(() => dispatch(actions.fetchActorCard(id)), [dispatch, id])
  const onCleanActorCard = useCallback(() => dispatch(actions.cleanActorCard()), [dispatch])

  useEffect(() => {
    onFetchActorCard()
    return  () => {
      onCleanActorCard()
    }
  }, [onFetchActorCard, onCleanActorCard])

  return (
    <DetailPage 
      name = {actorCard.name}
      actorImage = {actorCard.profile_path} 
      bio = {actorCard.biography}
      birthday = {actorCard.birthday}
    />
  );
};

export default ActorCard;
