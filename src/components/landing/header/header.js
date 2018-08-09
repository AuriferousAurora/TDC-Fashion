import React from 'react';
import { Header } from '../../base/header/header';
import DarkLogo from './assets/dark-logo.png';

export const LandingHeader = (props) => (
  <Header id='landing-sidebar-toggle' className={'header--landing landing__header'} left={<img src={DarkLogo} alt='TDC Fashion'/>} right={<button onClick={props.onClick}>Menu</button>}/>
);