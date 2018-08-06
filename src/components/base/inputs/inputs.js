import React from 'react';

export const RefPoInput = class RefPoInput extends React.Component {
  render() {
    return (
      <div className='ref-po__input'>      
        <input type='text' 
          value={this.props.value} 
          onChange={this.props.onChange} required />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>Reference P.O.</label>
      </div>
    );
  }
}