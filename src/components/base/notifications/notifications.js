import React from 'react';

export const Notification = (props) => (
  <div className={'notification ' + props.className }>
    {props.children}
  </div> );