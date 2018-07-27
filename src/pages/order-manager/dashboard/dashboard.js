import React, { Component } from 'react';

import Button from '../../../components/base/buttons/button';

class DashboardOrderManager extends Component {
  render() {
    return (
      <div className='order-dashboard'>
        <div className='order-dashboard__top-bar'>
          <Button className={"button--settings"}></Button>
          <Button></Button>
        </div>
      </div>
    );
  }
}

export default DashboardOrderManager;