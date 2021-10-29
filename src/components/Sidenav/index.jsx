import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import DarkLogo from '../../assets/logo/logo-dark.png';
import sidebar_items from '../../assets/data/sidebar_routes.json';

const SidebarLinks = props => {
  const active = props.active ? 'active' : '';

  return (
    <div className="sidebar_item">
      <div className={`sidebar_item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>
          {props.title}
        </span>
      </div>
    </div>
  )
}

const Sidenav = props => {

  const activeItem = sidebar_items.findIndex(item => item.route === window.location.pathname)
  return (
    <div className='sidebar'>
      <div className="sidebar_logo">
        <img src={DarkLogo} alt="AgroForte"/>
      </div>
      {
        sidebar_items.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarLinks
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </Link>
        ))
      }
    </div>
  );
}

export default Sidenav;
