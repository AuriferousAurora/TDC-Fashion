import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Button = class Button extends Component {
  render() {
    return (
      <button className={'button ' + this.props.className}>
        {this.props.children}
      </button>
    );
  }
}
export const LinkButton = class LinkButton extends Component {
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