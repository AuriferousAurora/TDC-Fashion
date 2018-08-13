import React, { Component } from 'react';
import { LinkButton } from '../../../components/base/buttons/buttons';

import BgImage from './assets/pinchy-girl.jpeg';
import tdcIcon from './assets/dark-tdc-icon.png';
import HalfShirtIcon from './assets/half-shirt-right.png';


const bgStyle = {
  backgroundImage: "url(" + BgImage + ")",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};
class Entrance extends Component {
  render() {
    return (
      <div style={ bgStyle } className={'landing__entrance ' + this.props.className}>
        <div className='entrance__left'>
          <div className='left__side-script'>
            <div className='side-script__share'><span className='share'>share</span></div>
            <div className='side-script__url-tag'><span className='url-tag'>tdc.fashion</span></div>
            <div className='side-script__img'><img src={tdcIcon} alt='TDC'/></div>
          </div>
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
            <LinkButton className='middle__button' destination='/order'><span>Begin a Project</span></LinkButton>
          </div>
        </div>
        <div className='entrance__right'>
          <img className='right__img half-shirt-right-icon' src={HalfShirtIcon} alt='shirt'/>
        </div>
      </div>
    );
  }
}

export default Entrance;