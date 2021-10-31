import React from 'react'

import { CardContainer, CardIcon, CardInfo } from './styles';

const StatusCard = props => {
  return (
    <CardContainer>
      <CardIcon>
        <i className={props.icon}></i>
      </CardIcon>
      <CardInfo>
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </CardInfo>
    </CardContainer>
  )
}

export default StatusCard;
