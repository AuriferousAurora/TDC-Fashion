import React, { Component } from 'react';
import { SelectInput } from '../../base/inputs/inputs';
class ProductDetails extends Component {
  render() {
    return (
      <div className='product-details'>
        <SelectInput name={'size-selection'}
          controlFunction={this.props.handleSizeSelectChange}/>
      </div>
    );
  }
}

export default ProductDetails;