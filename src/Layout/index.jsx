import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidenav from '../components/Sidenav';
import Topnav from '../components/Topnav';
import Routes from '../Routes';
import {LayoutContainer, LayoutContent, LayoutContentMain} from './styles';

const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={(props) => ( 
        <LayoutContainer>
          <Sidenav {...props} />
          <LayoutContent>
            <Topnav />
            <LayoutContentMain>
              <Routes />
            </LayoutContentMain>
          </LayoutContent>
        </LayoutContainer>
      )}/>
    </BrowserRouter>
  )
};

export default Layout;
