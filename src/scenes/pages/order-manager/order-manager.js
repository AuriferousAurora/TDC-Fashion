import React, {Component, Fragment } from 'react';
import HeaderOrderManager from '../../../components/base/header/header--order-manager/header--order-manager';
import SidebarOrderManager from '../../../components/base/sidebar/sidebar--order-manager/sidebar--order-manager';

class OrderManager extends Component {
  render() {
    return (
      <Fragment>
        <HeaderOrderManager/>
        <SidebarOrderManager/>
        {/* <OrderManagerDashboard/>
        <OrderManagerFooter/> */}
      </Fragment>
    );
  }
}

export default OrderManager;