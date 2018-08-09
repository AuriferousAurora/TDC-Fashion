import React from 'react';
import { Header } from '../../base/header/header';

export const LandingHeader = (props) => (
  <Header id='landing-sidebar-toggle' 
          className={'header--landing landing__header'} 
          onClick={props.onClick}
          left={<img src={'/assets/light-logo.svg'} alt='TDC Fashion'/>}
          right={<button>Menu</button>}/>);