import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// This import accesses the Browser Router from React Router (v4) as 'Router' and wraps the entire application component. This allows 'Route' and 'Link' components to be imported and utilized within the entirety of the application.

import { BrowserRouter as Router, Route } from 'react-router-dom';

// This import accesses the main CSS file generates by 'index.sass' and makes it available to every sub-component within Appliocation.

import './styles/index.css';

// This section declares imports for main pages within the application (it may need to be restuctured such that the landing page is the first thing that is displayed and everything else is rendered based on the users input via the links established by React Router).

// ============================= //
// MAIN ROUTES CURRENTLY MOUNTED //
// ============================= //

import LandingPage from './pages/landing/landing';
import OrderManager from './pages/order-manager/order-manager';

// This section declares imports for typefaces. Each typeface is included via NPM and listed inside of the 'package.json' file within the 'dependencies' object.

import 'typeface-roboto';
import 'typeface-nunito';

const Landing = () => (
  <LandingPage/>
);

class Application extends Component {
  render() {
    return (
      <Fragment>
        <Route exact={true} path='/' component={Landing} />
        <Route path='/order' render={() => <OrderManager/>} />
      </Fragment>
    );
  }
}

render( <Router><Application/></Router>, document.getElementById('root'));