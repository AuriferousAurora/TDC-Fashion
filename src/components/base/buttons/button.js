import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button className={'button ' + this.props.className}>
        {this.props.innerHTML}
      </button>
    );
  }
}

export default Button;