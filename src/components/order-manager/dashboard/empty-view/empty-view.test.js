import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconEmptyView from './images/IconEmptyView.png';
import ButtonBase from '../../../base/buttons/button.test';

class EmptyView extends Component {
  render() {
    return (
      <div className='empty-view__container'>
        <img className='empty-view__icon' src={IconEmptyView} alt='Icon Empty View'/>
        <span className='empty-view__text'>Create a New Order</span>
        <ButtonBase className='empty-view__button'>
          <Link to='/om/d/new-product'>New Order</Link>
        </ButtonBase>
      </div>
    );
  }
}

export default EmptyView;