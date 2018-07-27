import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className={'button ' + this.props.className}>
        <h5>{this.props.innerText}</h5>
      </button>
    );
  }
}

export default Button;