import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconEmptyView from './images/IconEmptyView.png';
import { LinkButton } from '../../../base/buttons/button';

class EmptyView extends Component {
  render() {
    return (
      <div className='empty-view__container'>
        <img className='empty-view__icon' src={IconEmptyView} alt='Icon Empty View'/>
        <span className='empty-view__text'>Create a New Order</span>
        <LinkButton className='empty-view__button' to='/dashboard'>
          <span>New Order</span>
        </LinkButton>
      </div>
    );
  }
}

export default EmptyView;