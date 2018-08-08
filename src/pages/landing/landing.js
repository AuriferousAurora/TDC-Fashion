import React, { Component, Fragment } from 'react';

import Entrance from '../../components/landing/entrance/entrance';
import { LandingHeader } from '../../components/landing/header/header';
import { LandingFooter } from '../../components/landing/footer/footer';
 
class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <LandingHeader/>
        <Entrance/>
        <div className='ent-yellow'></div>
        <div className='ent-green'></div>
        <div className='ent-orange'></div>
        <LandingFooter/>
      </Fragment>
    );
  }
}

export default LandingPage;




