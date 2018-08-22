import React from 'react';

import Content from '../../base/content/content';
import { LinkButton } from '../../base/buttons/buttons';

import BgImage from './assets/international-fashion.jpg';

// const bgStyleSmall = { background: '#F7F7F7' }

const bgStyle800 = { backgroundImage: 'url(' + BgImage + ')',
                     backgroundSize: 'cover',
                     backgroundPosition: '50%' }

// const mq = window.matchMedia( '(min-width: 50em' );

// const mediaCheck = () => { if (mq.matches) { return (bgStyle800); } 
//                       else { return (bgStyleSmall); }}

export const LandingAbout = (props) => (
  <Content className={ 'landing__about' } style={ bgStyle800 }>
    <span className='about__title'>About Us</span>
    <LinkButton className='about__link-button' destination='/'>
      <span>Find Out More</span>
    </LinkButton>
  </Content>
);