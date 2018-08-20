import React, { Component } from 'react';

import { SingleInput, FileInput } from '../../base/inputs/inputs';
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
          <SingleInput
            className={'product-form__input product-form__description-input animated-input'}
            name={'descriptionInput'}
            inputType={'text'}
            content={this.props.description}
            controlFunction={this.props.handleDescriptionChange}
            label={'Description'} />
        </div>
        <ProductDetails size={this.props.size}
          handleSizeChange={this.props.handleSizeChange} 
          color={this.props.color}
          handleColorChange={this.props.handleColorChange}
          quantity={this.props.quantity}
          handleQuantityChange={this.props.handleQuantityChange}/>
        <span className='add-feature'>Add Feature</span>
        <FileInput className={'add-sketch-input'}
          label={'Add sketches'}
          name={'sketch-upload'}
          value={this.props.sketches}
          controlFunction={this.props.handleSketchChange}
          accept={'.png, .gif, .tif, .jpg, .jpeg, .bpm'}/>
        <FileInput className={'add-tech-sheet-input'}
          label={'Add tech sheets'}
          name={'tech-sheet-upload'}
          value={this.props.techSheets}
          controlFunction={this.props.handleTechSheetChange}
          accept={'.xlsx, .pdf'}/>
      </div>
    );
  }
}

export default ProductCreator;