import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

// This import accesses the Browser Router from React Router (v4) as 'Router' and wraps the entire application component. This allows 'Route' and 'Link' components to be imported and utilized within the entirety of the application.

import { BrowserRouter as Router, Route } from 'react-router-dom';

// This import accesses the main CSS file generates by 'index.sass' and makes it available to every sub-component within  the application.

import './styles/index.css';

// This section declares imports for pages within the application.

// ================================= //
// { MAIN } ROUTES CURRENTLY MOUNTED //
// ================================= //

import LandingPage from './pages/landing/landing';
import OrderManager from './pages/manager/manager';

// This section declares imports for typefaces. Each typeface is included via NPM and listed inside the 'package.json' file within the 'dependencies' object.

import 'typeface-roboto';
import 'typeface-nunito';
import 'typeface-alegreya';

// This variable declaration returns the landing page component so that it can be used as a part of the 'component' functionality provided by React Router on line 37.

const Landing = () => ( <LandingPage/> );

// This component acts as the index for the project. Upon loading, the landing page is rendered, and each other route is accessible via various means.

class Application extends Component {
  render() {
    return (
      <Fragment>
        <Route exact={true} path='/' component={Landing} />

        <Route path='/order' render={ () => <OrderManager/> } />
      </Fragment>
    );
  }
}

// The { render } function import as part of the ReactDOM mounts the top-level 'Application' component wrapped in 'Router' tags from React Router.

render( <Router><Application/></Router>, document.getElementById('root'));