import React, { Component } from 'react';
import IconEmptyView from './images/IconEmptyView.png';
import ButtonBase from '../../../base/buttons/button.test';

class EmptyView extends Component {
  render() {
    return (
      <div className='empty-view__container'>
        <img className='empty-view__icon' src={IconEmptyView} alt='Icon Empty View'/>
        <span className='empty-view__text'>Create a New Order</span>
        <ButtonBase className='empty-view__button'>
          <span>New Order</span>
        </ButtonBase>
      </div>
    );
  }
}

export default EmptyView;