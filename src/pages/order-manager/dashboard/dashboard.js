import React, { Component } from 'react';
import ProductInstantiation from './product-instantiation/product-instantiation';
import ProductCreator from './product-creator/product-creator';

class DashboardOrderManager extends Component {
  render() {
    return (
      <div className='order-dashboard'>
        <div className='order-dashboard__top-bar'>
          <div className='top-bar__left'>
            <h4 className='top-bar__back-order'>Orders</h4>
            <h1 className='top-bar__new-order-title'>New Orders</h1>
          </div>
          <div className='top-bar__right'>
            <button className='top-bar__button--cancel'>CANCEL</button>
            <button className='top-bar__button--save'>SAVE</button>
            <button className='top-bar__button--req-quote'>REQUEST QUOTE</button>
          </div>
        </div>
        <div className='order-dashboard__body'>
          <ProductInstantiation/>
          <ProductCreator/>
          <ProductCreator/>
        </div>
      </div>
    );
  }
}

export default DashboardOrderManager;