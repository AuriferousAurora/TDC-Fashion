import React, { Component } from 'react';
import { SelectInput, SingleInput } from '../../base/inputs/inputs';
class ProductDetails extends Component {
  render() {
    return (
      <div className='product-details'>
        <SelectInput 
          name={'size-selection'}
          controlFunction={this.props.handleSizeChange}/>
        <SingleInput className={'product-form__input product-form__color-input animated-input'}
          name={'color-selection'}
          inputType={'text'}
          content={this.props.color}
          controlFunction={this.props.handleColorChange}
          label={'Color'}/>
        <SingleInput className={'product-form__input product-form__quantity-input animated-input'}
          name={'color-selection'}
          inputType={'number'}
          content={this.props.quantity}
          controlFunction={this.props.handleQuantityChange}
          label={'Quantity'}/>
      </div>
    );
  }
}

export default ProductDetails;