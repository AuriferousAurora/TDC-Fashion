import React, { Component } from 'react';
import { Button } from '../../base/buttons/buttons';
import ProductInstantiation from '../product-instantiation/product-instantiation';
import { ProductCreator } from '../product-creator/product-creator.test';

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
      size: '',
      color: '',
      quantity: '',
      sketches: [],
      techSheets: null
    };

    this.handleRefPoChange = this.handleRefPoChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleSketchChange = this.handleSketchChange.bind(this);
    this.handleTechSheetChange = this.handleTechSheetChange.bind(this);
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

  handleSizeChange(e) {
    this.setState({ size: e.target.value });
    console.log(this.state.size);
  }

  handleColorChange(e) {
    this.setState({ color: e.target.value });
    console.log(this.state.color);
  }

  handleQuantityChange(e) {
    this.setState({ quantity: e.target.value });
    console.log(this.state.quantity);
  }

  handleSketchFiles = (incomingFile) => {
    let sketchArray = [];
    sketchArray.push(incomingFile);
    console.log('This is the new sketch array: ' + sketchArray);
  };

  handleSketchChange(e) {
    e.preventDefault();
    let files = e.target.files[0];
    handleSketchFiles(files);
  }

  handleTechSheetChange(e) {
    this.setState({ techSheets: e.target.value });
    console.log(this.state.techSheets);
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
              path='/order/dashboard/product-details' 
              render={() => 
                <ProductCreator 
                  description={this.state.description} 
                  handleDescriptionChange={this.handleDescriptionChange} 
                  size={this.state.size}
                  handleSizeChange={this.handleSizeChange}
                  color={this.state.color}
                  handleColorChange={this.handleColorChange}
                  quantity={this.state.quantity}
                  handleQuantityChange={this.handleQuantityChange}
                  sketches={this.state.sketches}
                  handleSketchChange={this.handleSketchChange}
                  techSheets={this.state.techSheets}
                  handleTechSheetChange={this.handleTechSheetChange}/>
              }
            />
          </div>
        </div>
      </form>
    );
  }  
}

export default DashboardOrderManager;