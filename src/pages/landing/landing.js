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
    
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this); 
  }

  handleClick() {
    if (!this.state.sidebarOn) { document.addEventListener('click', this.handleOutsideClick, false);
    } else { document.removeEventListener('click', this.handleOutsideClick, false) }
    this.setState(prevState => ({ sidebarOn: !prevState.sidebarOn}));
  }

  handleOutsideClick(e) {
    this.handleClick();
  }

  render() {
    return (
      <Fragment>
        <LandingHeader onClick={this.handleClick} />
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




