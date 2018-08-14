import React, { Fragment } from 'react';
import { Footer } from '../../base/footer/footer';
import { Link } from 'react-router-dom'

import FacebookIcon from './assets/facebook-primary.png';
import InstagramIcon from './assets/instagram-primary.png';
import TwitterIcon from './assets/twitter-primary.png';

export const LandingFooter = (props) => (
  <Footer className={'footer--landing landing__footer'}
    links={
    <Fragment>
      <Link className='link footer__link' to='/'><span>Facilities</span></Link>
      <Link className='link footer__link' to='/'><span>Suppliers</span></Link>
      <Link className='link footer__link' to='/'><span>Success Stories</span></Link>
      <Link className='link footer__link' to='/'><span>Newsletter</span></Link>
      <Link className='link footer__link' to='/'><span>Blog</span></Link>
    </Fragment>}
    social={
    <Fragment>
      <img id='landing__facebook-link' className='landing__social-link' src={FacebookIcon} alt='Facebook'/>
      <img id='landing__instagram-link' className='landing__social-link' src={InstagramIcon} alt='Instagram'/>
      <img id='landing__twitter-link' className='landing__social-link' src={TwitterIcon} alt='Twitter'/>
    </Fragment>}>
  </Footer>
);