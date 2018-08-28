import React, {Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Component Import Declarations //

import Sidebar from '../../components/base/sidebar/sidebar';
import EmptyView from '../../components/order-manager/empty/empty';
import Dashboard from '../../components/manager/dashboard/dashboard.test';

// Icon Import Declarations //

import Logo from '../../components/base/logo/logo.js';
import DashboardIcon from './icons/IconDashboardEnable.png';
import NewOrderIcon from './icons/IconNewOrder.png';
import PaymentIcon from './icons/IconPaymentsDisable.png';
import ShippingIcon from './icons/IconShippingDisable.png';
import NotificationIcon from './icons/IconNotificationsDisable.png';

const Dashboard = () => (
  <DashboardOrderManager/>
);

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
          <Route exact={true} path='/' render={() => <EmptyView/>}/>
          {/* If it becomes necessary to pass props to a component, use React Router's render method instead of component method. Check out this link if stuck: https://tylermcginnis.com/react-router-pass-props-to-components/*/}
          <Route path='/dashboard' component={Dashboard}/>
        </Fragment>
    );
  }
}

export default OrderManager;