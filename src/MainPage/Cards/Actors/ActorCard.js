import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/actors/actions/index'
import DetailPage from '../DetailPage';



const ActorCard = props => {

  const dispatch = useDispatch()
  const actorCard = useSelector(state => {
    return state.actors.actorCard
  })
  
  const { id } = props.location.state
  const onFetchActorCard = useCallback((id) => dispatch(actions.getActorCard(id)), [dispatch])
  const onCleanActorCard = useCallback(() => dispatch(actions.cleanActorCard()), [dispatch])

  useEffect(() => {
    onFetchActorCard(id)
    return  () => {
      onCleanActorCard()
    }
  }, [onFetchActorCard, onCleanActorCard, id])

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
