import React, { Component } from 'react';
import { Button } from '../../base/buttons/buttons';
import ProductInstantiation from '../product-instantiation/product-instantiation';
import ProductCreator from '../product-creator/product-creator';

import { Route } from 'react-router-dom';

class TopBarRight extends Component {
  createMarkUp(innerHTML) {
    return { __html: innerHTML };
  }

  render() {
    return (
      <div className='top-bar__right'>
        <Button className='top-bar__button--cancel'>{<span>CANCEL</span>}</Button>
        <Button className='top-bar__button--save'>{<span>CANCEL</span>}</Button>
        <Button className='top-bar__button--req-quote'>{<span>CANCEL</span>}</Button>
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
    this.state = { 
      refPo: '',
      description: '',
      size: ''
    };

    this.handleRefPoChange = this.handleRefPoChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSizeSelectChange = this.handleSizeSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRefPoChange(e) {
    this.setState({ refPo: e.target.value });
    console.log(this.state.refPo);
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
    console.log(this.state.description);
  }

  handleSizeSelectChange(e) {
    this.setState({ size: e.target.value });
    console.log(this.state.size);
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
            <ProductInstantiation refPo={this.state.refPo} handleRefPoChange={this.handleRefPoChange}/>
            <Route 
              path='/dashboard/product-details' 
              render={() => 
                <ProductCreator 
                  description={this.state.description} 
                  handleDescriptionChange={this.handleDescriptionChange} handleSizeSelectChange={this.handleSizeSelectChange}/>
              }
            />
          </div>
        </div>
      </form>
    );
  }  
}

export default DashboardOrderManager;