import React, {Component, Fragment } from 'react';
import OrderManagerHeader from ''

class OrderManager extends Component {
  render() {
    return (
      <Fragment>
        <OrderManagerHeader/>
        <OrderManagerSidebar/>
        <OrderManagerDashboard/>
        <OrderManagerFooter/>
      </Fragment>
    );
  }
}

export default OrderManaer;