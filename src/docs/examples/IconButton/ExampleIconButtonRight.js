import React from 'react';
import IconButton from 'zs-react/IconButton';

/** IconButton right simple example */
export default function ExampleIconButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (<IconButton onClick = {handleClick} 
      location="right" icon="fa fa-shopping-basket">Click me
      </IconButton>
  );
}