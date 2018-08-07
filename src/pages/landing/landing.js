import React, { Component, Fragment } from 'react';

import Header from '../../components/base/header/header';
import Entrance from '../../components/landing/entrance/entrance';
 
class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Header className='header--landing landing__header' 
          left={<img src={'./resources/light-logo.svg'} alt='TDC Fashion'/>} 
          right={<img src={'./resources/light-acronym.svg'} alt={'TDC'}/>}>
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




