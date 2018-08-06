import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkButton extends Component {
  render() {
    return (
      <Link 
        className={'link-button ' + this.props.className}
        to={this.props.destination}>
        {this.props.children}
      </Link>
    );
  }
}

export default LinkButton;