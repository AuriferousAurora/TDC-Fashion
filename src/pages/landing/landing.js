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
    this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this); 
  }

  handleSidebarToggle() {
    this.setState(prevState => ({ sidebarOn: !this.setState.sidebarOn }));
  }

  handleClick() {
    if (!this.state.sidebarOn) { document.addEventListener('click', this.handleOutsideClick, false);
    } else { document.removeEventListener('click', this.handleOutsideClick, false) }
    this.setState(prevState => ({ sidebarOn: !prevState.sidebarOn}));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    return (
      <Fragment>
        <LandingHeader onClick={this.handleSidebarToggle} />
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




