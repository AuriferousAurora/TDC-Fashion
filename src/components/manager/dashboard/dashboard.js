import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Form } from '../../base/form/form';
import { Button } from '../../base/buttons/buttons';
import { LinkButton } from '../../base/buttons/buttons';
import { OrderHead } from '../order-head/order-head';
import { OrderBody } from '../order-body/order-body';
import { OrderLabel } from '../../manager/order-label/order-label';
import { NotificationOrder } from '../notifications/notifications';
class TopBarRight extends Component {
  render() {
    return (
      <div className='top-bar__right'>
        <Button className='top-bar__button--cancel'>{<span>CANCEL</span>}</Button>
        <LinkButton className='top-bar__button--save' destination={'/order/dashboard/product-details/notification'}>{<span>SAVE</span>}</LinkButton>
        <Button className='top-bar__button--req-quote'>{<span>REQUEST QUOTE</span>}
        </Button>
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

const OrderNotification = () => ( <NotificationOrder/> );
export const DashboardManager = class DashboardManager extends Component {
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
    this.handleLoadImage = this.handleLoadImage.bind(this);
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

  handleLoadImage(file){
    if(file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        console.log('Reader.result ' + reader.result);
        this.setState(() => ({ sketches: reader.result}));
        console.log("Type of array index: " + typeof(this.state.sketches[0]));
      };
      reader.readAsDataURL(file);
    }
  }

  handleSketchChange(e) {
    e.preventDefault();
    let files = e.target.files;
    let index;
    for (index = 0; index < files.length; index++) {
      let file = files[index];
      this.handleLoadImage(file);
      // let url = reader.readAsDataURL(file);
      // images.push({'image': file, 'imagePreviewURL': url});
      // console.log(images);
    }
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
      <Form id={'product-form'}
        className={'product-form'}
        handleSubmit={this.handleSubmit}>
        <Route path='/order/dashboard/product-details/notification' component={NotificationOrder}/>
        <div className='order-dashboard'>
          <div className='order-dashboard__top-bar'>
            <TopBarLeft/>
            <TopBarRight/>
          </div>
          <div className='order-dashboard__body'>
            <OrderHead refPo={this.state.refPo} handleRefPoChange={this.handleRefPoChange}/>
            <Route path='/order/dashboard/product-details' 
              render={() => <OrderBody
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
                  handleTechSheetChange={this.handleTechSheetChange}/>}/>
              <OrderLabel/>
          </div>
        </div>
      </Form>
    );
  }  
}