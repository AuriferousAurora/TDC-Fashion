import React from 'react';

export const SingleInput = (props) => (
  <div className={'form__input-container ' + props.className}>      
    <input 
      className='form__input'
      name={props.name}
      type={props.inputType} 
      value={props.content} 
      onChange={props.controlFunction}
      required />
    <span className='input__highlight'></span>
    <span className='input__bar'></span>
    <label>Reference P.O.</label>
  </div>
);

SingleInput.propTypes = {

}