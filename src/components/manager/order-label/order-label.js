import React from 'react';

export const OrderLabel = (props) => (
  <div className='order-label'>
    <div className='left'>
      <span className='order-number'>Order 01 - Reference P.O.</span>
      <span className='product-count'>Products: 03</span>
      <span className='quote-status'>Quote: Pending</span>
    </div>
    <div className='right'>
      <div className='information'>
        <span className='quote-status'>Initial Quote Pending</span>
        <span className='time'>5 min ago</span>
      </div>
      <div className='icon-container'>
      </div>
    </div>
  </div> );