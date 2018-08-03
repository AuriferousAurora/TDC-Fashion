import React, { Component } from 'react';

class RefPOForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('The reference P.O. is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='ref-po__form'>
        <div className='ref-po__input'>      
          <input type='text' value={this.state.value} onChange={this.handleChange} required />
          <span className='highlight'></span>
          <span className='bar'></span>
          <label>Reference P.O.</label>
        </div>
        <div className='ref-po__submit'>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default RefPOForm;