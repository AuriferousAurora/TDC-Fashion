import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
    this.state = { refPo: '' };

    this.handleRefPoChange = this.handleRefPoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRefPoChange(event) {
    this.setState({ refPo: event.target.value });
  }

  handleSubmit(event) {
    alert('The Reference P.O. is ' + this.state.refPo);
    event.preventDefault();
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit} 
        id='product-form' 
        className={'form ' + this.props.className}>
        {this.props.children}
      </form>
    );
  }
}

export default Form;