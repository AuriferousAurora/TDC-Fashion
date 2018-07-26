import React from 'react';
import Header from '../header.js';

class HeaderOrderManager extends Header {
  render() {
    return (
      <div className='header header--order-manager'>
        <h1>Order Manager Header</h1>
      </div>
    );
  }
}

export default HeaderOrderManager;