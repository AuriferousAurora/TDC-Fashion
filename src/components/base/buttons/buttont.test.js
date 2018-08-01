import React from 'react';

function ButtonBase(props) {
  return (
    <button className={'button ' + props.className}>
      {props.children}
    </button>
  );
}

export default ButtonBase;