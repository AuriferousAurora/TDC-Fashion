import React from 'react';
import Header from '../header.js';
import Button from '../../buttons/button';

class HeaderOrderManager extends Header {
  render() {
    const logStatus = "Log Out";
    const settingsIcon = '';

    return (
      <div className='header header--order-manager'>
        <div className='header__left'>
        </div>
        <div className='header__right'>
          <Button className={"button--settings"}>{settingsIcon}</Button>
          <Button>{logStatus}</Button>
        </div>
      </div>
    );
  }
}

export default HeaderOrderManager;