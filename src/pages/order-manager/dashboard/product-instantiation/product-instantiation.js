import React, { Component } from 'react';

class ProductInstantiation extends Component {
  render() {
    return (
      <div className='product-instantiation'>
        <div className='label-container'>
          <div className='order-number-label'>
            <div className='label__left'>
              <span className='order-number'>Order No. 01</span>
            </div>
            <div className='label__right'></div>
          </div>
        </div>
        <div className='reference-po-container'>
        </div>
        <div className='add-product-container'>
          <span className='products-label'>Products:</span>
          <button className='add-product'>Add Product</button>
        </div>
      </div>
    );
  }
}

export default ProductInstantiation;