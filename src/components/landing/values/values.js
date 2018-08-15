import React, {Component} from 'react';
import Content from '../../base/content/content';

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
    this.setState({ oneOpen: !this.state.oneOpen });
  }
  handleClickTwo() { 
    this.setState({ twoOpen: !this.state.twoOpen });
  }
  handleClickThree() { 
    this.setState({ threeOpen: !this.state.threeOpen }); 
  }
  handleClickFour() { 
    this.setState({ fourOpen: !this.state.fourOpen }); 
  }

  render() {
    const oneStatus = this.state.oneOpen ? 'values__description-open' : 'values__description-closed'
    const twoStatus = this.state.twoOpen ? 'values__description-open' : 'values__description-closed'
    const threeStatus = this.state.threeOpen ? 'values__description-open' : 'values__description-closed'
    const fourStatus = this.state.fourOpen ? 'values__description-open' : 'values__description-closed'


    return (  
      <Content className={ 'landing__values' }>
        <div className='values__title-container'>
          <h2 className='values__title'>Our Values</h2>
        </div>
        <div className='values__title-bar' onClick={this.handleClickOne}>
          <span className='value__descriptor'>Transparent</span>
        </div>   
        <div className={ 'values__description ' + oneStatus }>
          <span>From start to finish, our process is entirely visisble.</span>
        </div>

        <div id='value__speed' className='values__title-bar' onClick={this.handleClickTwo}>
          <span className='value__descriptor'>Speed</span>
        </div>
        <div className={ 'values__description ' + twoStatus } >
          <span>The faster you get your order, the better.</span>
        </div>

        <div id='value__ethical' className='values__title-bar' onClick={this.handleClickThree}>
          <span className='value__descriptor'>Ethical</span>
        </div>
        <div className={'values__description ' + threeStatus }>
          <span>Knowing that your clothes were made in humane conditions by people paid fair wages is important.</span>
        </div>  

        <div id='values__economic' className='values__title-bar' onClick={this.handleClickFour}>
          <span className='value__descriptor'>Economic</span>
        </div>
        <div className={ 'values__description ' + fourStatus }>
          <span className='description__text'>At the end of the day, money matters. We help you cut costs and keep quality.</span>
        </div>  
      </Content>
    );
  }
}
