import React from 'react';

export const Form = (props) => (
  <form id={ props.id }
    className={'form ' + props.className }
    onSubmit={ props.handleSumbit }>
    {props.children}
  </form> );