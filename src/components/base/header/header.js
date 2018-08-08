import React from 'react';

export const Header = (props) => (
  <div className={'header ' + props.className}>
    <div className='header__left'>
      {props.left}
    </div>
    <div className='header__right'>
      {props.right}
    </div>
  </div>
);