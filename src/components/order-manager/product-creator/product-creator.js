import React, { Component } from 'react';
import ProductDetails from '../product-details/product-details';

function BookMark(props) {
  return <div className='bookmark'><span>01</span></div>;
}

class ProductCreator extends Component {
  render() {
    return (
      <div className='product-creator'>
        <BookMark/>
        <div className='product-creator__number-label'>
          <span>Product No. 01</span>
          <div className='placeholder-input-div'></div>
        </div>
        <ProductDetails/>
        <span className='add-feature'>Add Feature</span>
        <div className='add-sketches'>
          <button className='add-sketch'>Add sketches</button>
        </div>
        <div className='add-tech-sheets'>
          <button className='add-tech-sheet'>Add technical sheet</button>
        </div>
      </div>
    );
  }
}

export default ProductCreator;