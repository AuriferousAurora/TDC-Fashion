import React from 'react';
import Sidebar from '../../base/sidebar/sidebar';
import Logo from '../../base/logo/logo.js';
import DashboardIcon from './icons/IconDashboardEnable.png';
import NewOrderIcon from './icons/IconNewOrder.png';
import PaymentIcon from './icons/IconPaymentsDisable.png';
import ShippingIcon from './icons/IconShippingDisable.png';
import NotificationIcon from './icons/IconNotificationsDisable.png';

class SidebarOrderManager extends Sidebar {
  render() {
    return (
      <div className='sidebar sidebar--order-manager'>
        <Logo/>
        <div className='sidebar__icon sidebar__icon--dashboard'><img src={DashboardIcon} alt='dashboard'/></div>
        <div className='sidebar__icon sidebar__icon--new-order'><img src={NewOrderIcon} alt='new-order'/></div>   
        <div className='sidebar__icon sidebar__icon--payments'><img src={PaymentIcon} alt='payment'/></div>
        <div className='sidebar__icon sidebar__icon--shipping'><img src={ShippingIcon} alt='shipping'/></div>
        <div className='sidebar__icon sidebar__icon--notifications'><img src={NotificationIcon} alt='notifications'/></div>
      </div>
    );
  }
}

export default SidebarOrderManager;