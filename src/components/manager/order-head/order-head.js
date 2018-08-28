import React, { Component } from 'react';

import { LinkButton } from '../../base/buttons/buttons';
import { SingleInput } from '../../base/inputs/inputs';

export const OrderHead = class OrderHead extends Component {
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
        <SingleInput 
          className={'product-form__input product-form__ref-po-input animated-input'}
          name={'refPoInput'}
          inputType={'text'}
          content={this.props.refPo}
          controlFunction={this.props.handleRefPoChange} 
          label={'Reference P.O'}/>
        <div className='add-product-container'>
          <span className='products-label'>Products:</span>
          <LinkButton
            className='add-product__link-button'
            destination='/order/dashboard/product-details'>
            <span>Add Product</span>
          </LinkButton>
        </div>
      </div>
    );
  }
}