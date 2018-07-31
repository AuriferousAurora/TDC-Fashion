import React, { Component } from 'react';
import ButtonBase from '../../../components/base/buttons/button';
import ProductInstantiation from './product-instantiation/product-instantiation';
import ProductCreator from './product-creator/product-creator';

class DashboardOrderManager extends Component {
  createMarkUp(innerHTML) {
    return { __html: innerHTML };
  }

  render() {
    return (
      <div className='order-dashboard'>
        <div className='order-dashboard__top-bar'>
          <div className='top-bar__left'>
            <h4 className='top-bar__back-order'>Orders</h4>
            <h1 className='top-bar__new-order-title'>New Orders</h1>
          </div>
          <div className='top-bar__right'>
            <ButtonBase 
              className='top-bar__button--cancel'
              innerHTML={this.createMarkUp('CANCEL')}></ButtonBase>
            <ButtonBase 
              className='top-bar__button--save'
              innerHTML={this.createMarkUp('SAVE')}></ButtonBase>
            <ButtonBase 
              className='top-bar__button--req-quote'
              innerHTML={this.createMarkUp('REQUEST QUOTE')}></ButtonBase>
          </div>
        </div>
        <div className='order-dashboard__body'>
          <ProductInstantiation/>
          <ProductCreator/>
        </div>
      </div>
    );
  }
}

export default DashboardOrderManager;