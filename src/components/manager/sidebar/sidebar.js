import React from 'react';

import { Sidebar } from '../../base/sidebar/sidebar';
import { Logo } from '../../base/logo/logo.js';

import DashboardIcon from './assets/IconDashboardEnable.png';
import NewOrderIcon from './assets/IconNewOrder.png';
import PaymentIcon from './assets/IconPaymentsDisable.png';
import ShippingIcon from './assets/IconShippingDisable.png';
import NotificationIcon from './assets/IconNotificationsDisable.png';

export const SidebarManager = (props) => (
  <Sidebar className={'sidebar--manager'}>
    <Logo/>
    <div className='sidebar__icon sidebar__icon--dashboard'><img src={DashboardIcon} alt='dashboard'/></div>
    <div className='sidebar__icon sidebar__icon--new-order'><img src={NewOrderIcon} alt='new-order'/></div>   
    <div className='sidebar__icon sidebar__icon--payments'><img src={PaymentIcon} alt='payment'/></div>
    <div className='sidebar__icon sidebar__icon--shipping'><img src={ShippingIcon} alt='shipping'/></div>
    <div className='sidebar__icon sidebar__icon--notifications'><img src={NotificationIcon} alt='notifications'/></div>
  </Sidebar> );