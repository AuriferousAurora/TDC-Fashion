import React, { Component } from 'react';
import ButtonBase from '../../base/buttons/button.test';
import ProductInstantiation from './product-instantiation/product-instantiation.test';
import ProductCreator from './product-creator/product-creator';

import { Route } from 'react-router-dom';

class TopBarRight extends Component {
  createMarkUp(innerHTML) {
    return { __html: innerHTML };
  }

  render() {
    return (
      <div className='top-bar__right'>
        <ButtonBase 
          className='top-bar__button--cancel'>{<span>CANCEL</span>}</ButtonBase>
        <ButtonBase 
          className='top-bar__button--save'>{<span>CANCEL</span>}</ButtonBase>
        <ButtonBase 
          className='top-bar__button--req-quote'>{<span>CANCEL</span>}</ButtonBase>
      </div>
    );
  }
}

class TopBarLeft extends Component {
  render() {
    return (
      <div className='top-bar__left'>
        <h4 className='top-bar__back-order'>Orders</h4>
        <h1 className='top-bar__new-order-title'>New Orders</h1>
      </div>
    );
  }
}

class DashboardOrderManager extends Component {
  constructor(props) {
    super(props);
    this.state = { refPo: '' };

    this.handleRefPoChange = this.handleRefPoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRefPoChange(e) {
    this.setState({ refPo: e.target.value });
    console.log(this.state.refPo);
  }

  handleSubmit(e) {
    alert('The Reference P.O. that you managed to get into the state and submit is ' + this.state.refPo);
    e.preventDefault();
  }

  render() {
    return (
      <form id='product-form' 
        className='form product-form'
        onSubmit={this.handleSubmit}>
        <div className='order-dashboard'>
          <div className='order-dashboard__top-bar'>
            <TopBarLeft/>
            <TopBarRight/>
          </div>
          <div className='order-dashboard__body'>
            <ProductInstantiation refPo={this.state.refPo} handleRefPoChangeProp={this.handleRefPoChange}/>
            <Route path='/dashboard/product-details' render={() => <ProductCreator/>}/>
          </div>
        </div>
      </form>
    );
  }  
}

export default DashboardOrderManager;