import React, { Component, Fragment } from 'react';

import { LandingEntrance } from '../../components/landing/entrance/entrance.test';
import { LandingHeader } from '../../components/landing/header/header.test';
import { LandingFooter } from '../../components/landing/footer/footer';
import { LandingSidebar } from '../../components/landing/sidebar/sidebar';
import { LandingProcess } from '../../components/landing/process/process';

// import { ParticleBackground } from '../../components/landing/particles/particle';
 
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
        {/* <ParticleBackground>
          <h1 className='entrance__tagline' style={{zIndex: 5}}>Sustainable Ethical Premium Fashion on Demand</h1>
          <LinkButton className='entrance__action-button' destination='/order'>
            <span>Get Started Now</span>
          </LinkButton>
        </ParticleBackground> */}
        <LandingEntrance/>
        <LandingProcess/>
        <div className='ent-green'></div>
        <div className='ent-orange'></div>
        <LandingFooter/>
      </Fragment>
    );
  }
}

export default LandingPage;




