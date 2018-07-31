import React from 'react';

function ButtonBase(props) {
  return (
    <button 
      className={'button ' + props.className}
      dangerouslySetInnerHTML={props.innerHTML}>
    </button>
  );
}

export default ButtonBase;