import React, {Component, Fragment } from 'react';
import SidebarOrderManager from '../../components/order-manager/sidebar/sidebar';
import DashboardOrderManager from '../../components/order-manager/dashboard/dashboard';

class OrderManager extends Component {
  render() {
    return (
      <Fragment>
        <SidebarOrderManager/>
        <DashboardOrderManager/>
      </Fragment>
    );
  }
}

export default OrderManager;