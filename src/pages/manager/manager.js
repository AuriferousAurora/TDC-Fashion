import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Component Import Declarations //

import { SidebarManager } from '../../components/manager/sidebar/sidebar';
import { Empty } from '../../components/manager/empty/empty';
import { DashboardManager } from '../../components/manager/dashboard/dashboard';

const Dashboard = () => ( <DashboardManager/> );
class OrderManager extends Component {
  render() {
    return (
        <Fragment>
          <SidebarManager/>
          <Route exact={true} path='/order' render={() => <Empty/>}/>
          <Route path='/order/dashboard' component={Dashboard}/>
          {/* React Router's component method cannot pass props. https://tylermcginnis.com/react-router-pass-props-to-components/*/}
        </Fragment>
    );
  }
}

export default OrderManager;