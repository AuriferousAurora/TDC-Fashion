import React from 'react';

class RefPoInput extends React.Component {
  render() {
    return (
      <div className='ref-po__input'>      
        <input type='text' 
          value={this.props.valueProp} 
          onChange={this.props.onChangeProp} required />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label>Reference P.O.</label>
      </div>
    );
  }
}

export default RefPoInput;