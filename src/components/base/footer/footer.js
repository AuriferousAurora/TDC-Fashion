import React from 'react';

export const Footer = (props) => (
  <div className={'footer ' + props.className}>
    <div className='footer__container'>
      <div className='footer__left'>
        {props.left}
      </div>
      <div className='footer__left'>
        {props.left}
      </div>
    </div>
    <div className='footer__bottom'>
      {props.bottom}
    </div>
  </div>
);