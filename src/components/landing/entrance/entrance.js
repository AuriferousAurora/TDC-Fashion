import React, { Component } from 'react';
import { LinkButton } from '../../../components/base/buttons/buttons';
class Entrance extends Component {
  render() {
    return (
      <div className={'landing__entrance ' + this.props.className}>
        <div className='entrance__left'>
          <div className='left__side-script'></div>
        </div>
        <div className='entrance__middle'>
          <div className='middle__tagline'>
            <span className='tagline__top'>START CREATING</span>
            <span className='tagline__bottom'>YOUR NEW CLOTHING LINE</span>
          </div>
          <div className='middle__description'>
            <span>Our process brings your designs to life</span>
          </div>
          <div className='middle__button-container'>
            <LinkButton className='middle__button' destination='/'><span>Begin a Project</span></LinkButton>
          </div>
        </div>

        <div className='entrance__right'></div>
      </div>
    );
  }
}

export default Entrance;