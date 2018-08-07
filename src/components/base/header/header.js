import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className={'header ' + this.props.className}>
        <div className='header__left'>
          {this.props.left}
        </div>
        <div className='header__right'>
          {this.props.right}
        </div>
      </div>
    );
  }
}

export default Header;