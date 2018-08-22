import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

// Component Import Declarations //

import { SidebarManager } from '../../components/manager/sidebar/sidebar';
import { Empty } from '../../components/manager/empty/empty';
import DashboardOrderManager from '../../components/manager/dashboard/dashboard';

const Dashboard = () => ( <DashboardOrderManager/> );
class OrderManager extends Component {
  render() {
    return (
        <Fragment>
          <SidebarManager/>
          <Route exact={true} path='/order' render={() => <Empty/>}/>

          {/* If it becomes necessary to pass props to a component, use React Router's render method instead of component method. Check out this link if stuck: https://tylermcginnis.com/react-router-pass-props-to-components/*/}

          <Route path='/order/dashboard' component={Dashboard}/>
        </Fragment>
    );
  }
}

export default OrderManager;