import React from 'react';
import PropTypes from 'prop-types';

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
    <label>{props.label}</label>
  </div>
);

SingleInput.propTypes = {
  name: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
  controlFunction: PropTypes.func.isRequired,
};

export const SelectInput = (props) => (
  <div className={'form__input-container ' + props.className}>      
    <select 
      className='form__select'
      name={props.name}
      onChange={props.controlFunction}
      required>
      <option value='S'>S</option>
      <option value='M'>M</option>
      <option value='L'>L</option>
      <option value='XL'>XL</option>
      <option value='XXL'>XXL</option>
    </select>
    <span className='input__highlight'></span>
    <span className='input__bar'></span>
    <label>{props.label}</label>
  </div>
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  controlFunction: PropTypes.func.isRequired,
};