import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = (props) => (
  <div className={'footer ' + props.className}>
    <div className='footer__link-container'>
      {props.links}
    </div>
    <div className='footer__social-container'>
      {props.social}
    </div>
    <div className='footer__copyright'>
      <span className='copyright'>&#169; TDC Fashion | <Link className='link' to='/'>Privacy Policy</Link></span>
    </div>
  </div>
);