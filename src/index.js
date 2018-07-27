import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './styles/index.css';

import OrderManager from './scenes/pages/order-manager/order-manager';

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