import React, { Component } from 'react';
import Particles from 'react-particles-js';

const parameters = {
  particles: {
    number: {
      value: 150,
      density: {
        enabled: false,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#353535",
        blur: 5
      }
    }
  }
}

// const style = {
//   width: '100%',
//   height: '70%'
// }

export const ParticleBackground = class ParticleBackground extends Component {
  render() {
    return (
      <Particles params={ parameters } style={{ width: '100%', height: '70%' }}>
        {this.props.children}
      </Particles>
    );
  }
}