import React, {Component, Fragment } from 'react';
import Sidebar from '../../components/base/sidebar/sidebar.test';
import DashboardOrderManager from '../../components/order-manager/dashboard/dashboard';

import Logo from '../../components/base/logo/logo.js';
import DashboardIcon from './icons/IconDashboardEnable.png';
import NewOrderIcon from './icons/IconNewOrder.png';
import PaymentIcon from './icons/IconPaymentsDisable.png';
import ShippingIcon from './icons/IconShippingDisable.png';
import NotificationIcon from './icons/IconNotificationsDisable.png';

class OrderManager extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar className={'sidebar--order-manager'}>
          <Logo/>
          <div className='sidebar__icon sidebar__icon--dashboard'><img src={DashboardIcon} alt='dashboard'/></div>
          <div className='sidebar__icon sidebar__icon--new-order'><img src={NewOrderIcon} alt='new-order'/></div>   
          <div className='sidebar__icon sidebar__icon--payments'><img src={PaymentIcon} alt='payment'/></div>
          <div className='sidebar__icon sidebar__icon--shipping'><img src={ShippingIcon} alt='shipping'/></div>
          <div className='sidebar__icon sidebar__icon--notifications'><img src={NotificationIcon} alt='notifications'/></div>
        </Sidebar>
        <DashboardOrderManager/>
      </Fragment>
    );
  }
}

export default OrderManager;