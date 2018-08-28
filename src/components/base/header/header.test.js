import React from 'react';

export const Header = (props) => (
  <div className={'header ' + props.className}>
    {props.children}
  </div>
);