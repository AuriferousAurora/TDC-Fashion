import React from 'react';

export const Notification = (props) => (
  <div className={'notification ' + props.className }>
    <div className='message'>
      {props.message}
    </div>
    <div className='close'>
      <span>X</span>
    </div>
  </div> );