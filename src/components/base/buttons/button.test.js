import React, { Component } from 'react';

class ButtonBase extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log('Click happened. You did it, you brilliant boy, you.');
  //   alert('Frickedy-frick-frack, bro! You done did it!');
  // }

  render() {
    return (
      <button className={'button ' + this.props.className}>
        {this.props.children}
      </button>
    );
  }
}

export default ButtonBase;