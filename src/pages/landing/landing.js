import React, { Component, Fragment } from 'react';

import Entrance from '../../components/landing/entrance/entrance';
import { LandingHeader } from '../../components/landing/header/header';
import { LandingFooter } from '../../components/landing/footer/footer';
import { LandingSidebar } from '../../components/landing/sidebar/sidebar';
 
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOn: false
    }
    this.handleSidebarToggleChange = this.handleSidebarToggleChange.bind(this);
  }

  handleSidebarToggleChange() {
    this.setState(prevState => ({ sidebarOn: !this.setState.sidebarOn }));
  }
  render() {
    return (
      <Fragment>
        <LandingHeader onClick={this.handleSidebarToggleChange} />
        <LandingSidebar isOpen={this.state.sidebarOn}/>
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




