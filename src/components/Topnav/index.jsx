import React from 'react';

import Dropdown from '../Dropdown';
import { TopnavContainer, TopnavRight, TopnavRightItem, TopnavSearch } from './styles';

const Topnav = () => {
  return (
    <TopnavContainer>
      <TopnavSearch>
        <input type="text" placeholder="Pesquisar..." />
        <i className="bx bx-search"></i>
      </TopnavSearch>
      <TopnavRight>
        <TopnavRightItem>
            <Dropdown />
         </TopnavRightItem>
        <TopnavRightItem>
            <Dropdown />
         </TopnavRightItem>
        <TopnavRightItem>
            <Dropdown />
         </TopnavRightItem>
      </TopnavRight>
    </TopnavContainer>
  )
}

export default Topnav;
