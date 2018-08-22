import React from 'react';

import Icon from './assets/IconEmptyView.png';
import { LinkButton } from '../../base/buttons/buttons';

export const Empty = (props) => (
  <div className='empty-view__container'>
    <img className='empty-view__icon' src={Icon} alt='Empty View'/>
    <span className='empty-view__text'>Create a New Order</span>
    <LinkButton className='empty-view__button' destination='/order/dashboard'>
      <span>New Order</span>
    </LinkButton>
  </div> );
