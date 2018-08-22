import React from 'react';
import Content from '../../base/content/content';
import { LinkButton } from '../../base/buttons/buttons';

import BgImage from './assets/fashion-design.jpeg';
// import tdcIcon from './assets/dark-tdc-icon.png';
// import HalfShirtIcon from './assets/half-shirt-right.png';

const bgStyleSmall = {
  background: '#F7F7F7'
}

const bgStyle800 = {
  backgroundImage: 'url(' + BgImage + ')',
  backgroundSize: 'cover',
  backgroundPosition: '50%'
}

const mq = window.matchMedia( '(min-width: 50em' );

const media = () => {
  if (mq.matches) {
    return (bgStyle800);
  } else {
    return (bgStyleSmall);
  }
}

export const LandingEntrance = (props) => (
  <Content className={ 'landing__entrance' } style={ media() }>
    <h1 className='entrance__tagline'>Sustainable Ethical Premium Fashion on Demand</h1>
    <LinkButton className='entrance__action-button' destination='/'>
      <span>Get Started Now</span>
    </LinkButton>
  </Content>
);