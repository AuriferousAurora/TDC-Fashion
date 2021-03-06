import React, {Component} from 'react';
import Content from '../../base/content/content';

import Image1 from './assets/fashion-designer.jpeg';
import Image2 from './assets/international-sourcing.jpeg';
import Image3 from './assets/fashion-brand.jpeg';
import Image4 from './assets/apparel.jpeg';
export const LandingValues = class LandingValues extends Component {
  constructor(props) {
    super(props);

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.handleClickFour = this.handleClickFour.bind(this);

    this.state = {
      oneOpen: true,
      twoOpen: false,
      threeOpen: false,
      fourOpen: false
    }
  }

  handleClickOne() { 
    this.setState({ oneOpen: !this.state.oneOpen, 
                    twoOpen: false, 
                    threeOpen: false, 
                    fourOpen: false });
  }

  handleClickTwo() { 
    this.setState({ oneOpen: false, 
                    twoOpen: !this.state.twoOpen, 
                    threeOpen: false, 
                    fourOpen: false });
  }

  handleClickThree() { 
    this.setState({ oneOpen: false, 
                    twoOpen: false, 
                    threeOpen: !this.state.threeOpen, 
                    fourOpen: false });
  }
  handleClickFour() { 
    this.setState({ oneOpen: false, 
                    twoOpen: false, 
                    threeOpen: false, 
                    fourOpen: !this.state.fourOpen });
  }

  render() {
    const oneStatus = this.state.oneOpen ? 'values__description-open' : 'values__description-closed'
    const twoStatus = this.state.twoOpen ? 'values__description-open' : 'values__description-closed'
    const threeStatus = this.state.threeOpen ? 'values__description-open' : 'values__description-closed'
    const fourStatus = this.state.fourOpen ? 'values__description-open' : 'values__description-closed'

    const mq = window.matchMedia( '(min-width: 600px)' );

    if (mq.matches) { return (  
        <Content className={ 'landing__values--large' }>
          <div className='values__title-container'>
            <h2 className='value__title'>Our Values</h2>
          </div>
          <div className='value__title-bar' onClick={this.handleClickOne}>
            <span className='value__descriptor'>Transparent</span>
          </div>   
          <div className={ 'value__description ' + oneStatus }>
            <img src={Image1} alt='lady'/>
            <span>From start to finish, our process is entirely visible.</span>
          </div>

          <div className='value__title-bar' onClick={this.handleClickTwo}>
            <span className='value__descriptor'>Speed</span>
          </div>
          <div className={ 'value__description ' + twoStatus }>
            <img src={Image2} alt='lady'/>
            <span>The faster you get your order, the better.</span>
          </div>

          <div className='value__title-bar' onClick={this.handleClickThree}>
            <span className='value__descriptor'>Ethical</span>
          </div>
          <div className={ 'value__description ' + threeStatus }>
            <img src={Image3} alt='lady'/>
            <span>Knowing that your clothes were made in humane conditions by people paid fair wages is important.</span>
          </div>

          <div className='value__title-bar' onClick={this.handleClickFour}>
            <span className='value__descriptor'>Economic</span>
          </div>
          <div className={ 'value__description ' + fourStatus }>
            <img src={Image4} alt='lady'/>
            <span>At the end of the day, money matters. We help you cut costs and keep quality.</span>
          </div>
        </Content> );
    } else { return (  
      <Content className={ 'landing__values' }>
        <div className='values__title-container'>
          <h2 className='value__title'>Our Values</h2>
        </div>
        <div className='value__title-bar' onClick={this.handleClickOne}>
          <span className='value__descriptor'>Transparent</span>
        </div>   
        <div className={ 'value__description ' + oneStatus }>
          <span>From start to finish, our process is entirely visisble.</span>
        </div>

        <div className='value__title-bar' onClick={this.handleClickTwo}>
          <span className='value__descriptor'>Speed</span>
        </div>
        <div className={ 'value__description ' + twoStatus } >
          <span>The faster you get your order, the better.</span>
        </div>

        <div className='value__title-bar' onClick={this.handleClickThree}>
          <span className='value__descriptor'>Ethical</span>
        </div>
        <div className={'value__description ' + threeStatus }>
          <span>Knowing that your clothes were made in humane conditions by people paid fair wages is important.</span>
        </div>  

        <div className='value__title-bar' onClick={this.handleClickFour}>
          <span className='value__descriptor'>Economic</span>
        </div>
        <div className={ 'value__description ' + fourStatus }>
          <span className='description__text'>At the end of the day, money matters. We help you cut costs and keep quality.</span>
        </div>  
      </Content> );
    }
  }
}
