import React, { Fragment } from 'react';
import { Footer } from '../../base/footer/footer';
import { Link } from 'react-router-dom'

export const LandingFooter = (props) => (
  <Footer className={'footer--landing landing__footer'}
    left={
    <Fragment>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
    </Fragment>}
    right={
    <Fragment>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
      <Link className='link footer__link' to='/'><span>Discover Our Story</span></Link>
    </Fragment>}
    bottom={
      <Fragment>
        <div className='bottom__left'>
          <Link className='link bottom__link link--spacer' to='/'><span>Contact Us</span></Link>
          <Link className='link bottom__link' to='/'><span>Contact Us</span></Link>
          <Link className='link bottom__link' to='/'><span>Contact Us</span></Link>
          <Link className='link bottom__link' to='/'><span>Contact Us</span></Link>
          <Link className='link bottom__link' to='/'><span>Contact Us</span></Link>
        </div>
        <div className='bottom__right'>
          <svg></svg>
        </div>
      </Fragment>}/>
);