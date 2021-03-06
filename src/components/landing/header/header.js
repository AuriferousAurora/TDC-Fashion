import React from 'react';
import { Header } from '../../base/header/header';
import DarkLogo from './assets/dark-logo.png';
import Burger from './assets/burger.png';

export const LandingHeader = (props) => (
  <Header id='landing-sidebar-toggle' className={'header--landing landing__header'} left={<img src={DarkLogo} alt='TDC Fashion'/>} right={<img className='menu-button' src={Burger} alt='Menu' onClick={props.onClick}/>}/>
);