import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// This import accesses the main CSS file generates by 'index.sass' and makes it available to every sub-component within App.
import './styles/index.css';

// This section declares imports for main pages within the application (it may need to be restuctured such that the landing page is the first thing that is displayed and everything else is rendered based on the users input via the links heretobe established by React Router).

import OrderManager from './pages/order-manager/order-manager.test';

// This section declares imports for typefaces. Each typeface is included via NPM and listed inside of the 'package.json' file within the 'dependencies' object.

import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <Fragment>
        <OrderManager/>
      </Fragment>
    );
  }
}

render( <App/>, document.getElementById('root'));