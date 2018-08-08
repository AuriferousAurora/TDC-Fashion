import React from 'react';
import { Header } from '../../base/header/header';

export const LandingHeader = (props) => (
  <Header className={'header--landing landing__header'} 
          left={<img src={'/assets/light-logo.svg'} alt='TDC Fashion'/>}
          right={<button>Menu</button>}/>);