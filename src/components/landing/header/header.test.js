import React from 'react';
import { Header } from '../../base/header/header.test';

import BoxLogo from './assets/logo-boxed.png'
import Burger from './assets/burger.png';

export const LandingHeader = (props) => (
  <Header id='landing-sidebar-toggle' 
          className={'header--landing landing__header'} 
          onClick={props.onClick}>
    <img className='header-title' src={BoxLogo} alt='TDC Fashion'/>
    <img className='menu-button' src={Burger} alt='Navigation' onClick={props.onClick}/>
  </Header>  
);