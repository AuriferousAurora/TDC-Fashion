import React, { Component, Fragment } from 'react';

import Header from '../../components/base/header/header';
import Entrance from '../../components/landing/entrance/entrance';
 
class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Header className='header--landing landing__header' 
          left={'TDC Fashion'} 
          right={<svg className='menu-button' viewBox='0 0 100 100'>
            <path d='./src/pages/landing/resources/light-acronym.svg'/></svg>}>
        </Header>
        <Entrance/>
        <div className='ent-yellow'></div>
        <div className='ent-green'></div>
        <div className='ent-orange'></div>
      </Fragment>
    );
  }
}

export default LandingPage;




