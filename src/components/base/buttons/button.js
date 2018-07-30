import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.createMarkUp = this.createMarkUp.bind(this);
  }

  createMarkUp(innerHTML) { return { __html: innerHTML }; }

  render() {
    return (
      <button className={'button ' + this.props.className}
        dangerouslySetInnerHTML={createMarkUp}>
      </button>
    );
  }
}

export default Button;