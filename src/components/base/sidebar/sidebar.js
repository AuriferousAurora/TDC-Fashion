import React from 'react';

export const Sidebar = (props) => (
  <div className={'sidebar ' + props.className}>
    {props.children}
  </div>
);