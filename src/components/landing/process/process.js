import React from 'react';
import Content from '../../base/content/content';

import SubmitIcon from './assets/submit.png';
import ReviewIcon from './assets/review.png';
import ChangeIcon from './assets/changes.png';
import ApproveIcon from './assets/approve.png';
import TrackingIcon from './assets/tracking.png';

export const LandingProcess = (props) => (
  <Content className={ 'landing__process' }>
    <div className='process__title-container'>
      <h2 className='process__title'>HOW IT WORKS</h2>
    </div>
    <div className='process__outer-container'>
      <div className='process__inner-container'>
        <div id='process__first-step' className='step__container'>
          <img className='step__icon' src={SubmitIcon} alt='Submit'/>
          <span className='step__title'>Submit your designs and recieve the best quote.</span>
        </div>
        <div className='step__container'>
          <img className='step__icon' src={ReviewIcon} alt='Review'/>
          <span className='step__title'>Review patterns and samples.</span>
        </div>
        <div className='step__container'>
          <img className='step__icon' src={ChangeIcon} alt='Change'/>
          <span className='step__title'>Make changes.</span>
        </div>
        <div className='step__container'>
          <img className='step__icon' src={ApproveIcon} alt='Approve'/>
          <span className='step__title'>Approve your order and submit payment.</span>
        </div>
        <div id='process__last-step' className='step__container'>
          <img className='step__icon' src={TrackingIcon} alt='Track'/>
          <span className='step__title'>Track shipment.</span>
        </div>
      </div>
    </div>
  </Content>
);