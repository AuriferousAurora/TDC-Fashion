import React, { Component } from 'react';

import LinkButton from '../../../base/buttons/link-button/link-button.test';

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
          <LinkButton
            className='add-product__link-button'
            destination='/dashboard/product-details'>
            <span>Add Product</span>
          </LinkButton>
        </div>
      </div>
    );
  }
}

export default ProductInstantiation;