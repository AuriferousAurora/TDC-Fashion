import React from 'react';
import Content from '../../base/content/content';
import { LinkButton } from '../../base/buttons/buttons';

import BgImage from './assets/pinchy-girl.jpeg';
// import tdcIcon from './assets/dark-tdc-icon.png';
// import HalfShirtIcon from './assets/half-shirt-right.png';

const bgStyle = {
  backgroundImage: 'url(' + BgImage + ')',
  backgroundSize: 'cover',
  backgroundPosition: '0 10%'
};

const bgStyle2 = {
  background: '#F7F7F7'
}

export const LandingEntrance = (props) => (
  <Content className={ 'landing__entrance' } style={ bgStyle2 }>
    <h1 className='entrance__tagline'>Sustainable Ethical Premium Fashion on Demand</h1>
    <LinkButton className='entrance__action-button' destination='/order'>
      <span>Get Started Now</span>
    </LinkButton>
  </Content>
);