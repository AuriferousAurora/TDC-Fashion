import React, { Component } from 'react';

class Entrance extends Component {
  render() {
    return (
      <div className={'landing__entrance ' + this.props.className}>
      </div>
    );
  }
}

export default Entrance;