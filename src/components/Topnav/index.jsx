import React from 'react';

import { Link } from 'react-router-dom';

import Dropdown from '../Dropdown';
import { NotificationItem, TopnavContainer, TopnavRight, TopnavRightItem, TopnavRightUser, TopnavRightUserImage, TopnavRightUserName, TopnavSearch } from './styles';

import notifications from '../../assets/data/notification.json';
import user_image from '../../assets/img/avatar.png';
import user_menu from '../../assets/data/user_menus.json';

const current_user = {
  display_name: 'Usuário Agroindústria',
  image: user_image
}

const renderNotificationsItem = (item, index) => (
    <NotificationItem key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </NotificationItem>
)

const renderUserToggle = (user) => (
  <TopnavRightUser>
    <TopnavRightUserImage>
      <img src={user.image} alt="User Avatar"></img>
    </TopnavRightUserImage>
    <TopnavRightUserName>
      {user.display_name}
    </TopnavRightUserName>
  </TopnavRightUser>
)

const renderUserMenu = (item, index) => (
  <Link to='/' key={index}>
    <NotificationItem>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </NotificationItem>
  </Link>
)

const Topnav = () => {
  return (
    <TopnavContainer>
      <TopnavSearch>
        <input type="text" placeholder="Pesquisar..." />
        <i className="bx bx-search"></i>
      </TopnavSearch>
      <TopnavRight>
        <TopnavRightItem>
            <Dropdown 
              customToggle={() => renderUserToggle(current_user)}
              contentData={user_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            />
         </TopnavRightItem>

        <TopnavRightItem>
            <Dropdown 
              icon='bx bx-bell'
              badge='12'
              contentData={notifications}
              renderItems={(item, index) => renderNotificationsItem(item, index)}
              renderFooter={() => <Link to='/'>Ver todas</Link> }
            />
         </TopnavRightItem>

        <TopnavRightItem>
            <Dropdown />
         </TopnavRightItem>

      </TopnavRight>
    </TopnavContainer>
  )
}

export default Topnav;
