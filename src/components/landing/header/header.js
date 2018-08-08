import React from 'react';
import { Header } from '../../base/header/header';

export const LandingHeader = (props) => (
  <Header className={'header--landing landing__header'} left={<span>TDC Fasion</span>} right={<button>Menu</button>}/>
);