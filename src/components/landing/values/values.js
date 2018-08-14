import React from 'react';
import Content from '../../base/content/content';

export const LandingValues = (props) => (
  <Content className={ 'landing__values' }>
    <div className='values__title-container'>
      <h2 className='values__title'>Our Values</h2>
    </div>
    <div id='value__transparent' className='values__title-bar'>
      <span className='value__descriptor'>Transparent</span>
    </div>   
    {/* <div className='values__description transparent__description'></div> */}
    <div id='value__speed' className='values__title-bar'>
      <span className='value__descriptor'>Speed</span>
    </div>
    {/* <div className='values__description transparent__description'></div> */}
    <div id='value__ethical' className='values__title-bar'>
      <span className='value__descriptor'>Ethical</span>
    </div>
    {/* <div className='values__description transparent__description'></div>    */}
    <div id='values__economic' className='values__title-bar'>
      <span className='value__descriptor'>Economic</span>
    </div>
    {/* <div className='values__description transparent__description'></div>    */}
  </Content>
);