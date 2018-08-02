import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkButton extends Component {
  render() {
    return (
      <button className={'link-button ' + this.props.className}>
        <Link 
          to={this.props.destination}
          style={{textDecoration: none}}>
          {this.props.children}
        </Link>
      </button>
    );
  }
}

export default LinkButton;