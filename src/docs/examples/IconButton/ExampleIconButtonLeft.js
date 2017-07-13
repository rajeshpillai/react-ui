import React from 'react';
import IconButton from 'zs-react/IconButton';

/** IconButton left simple example */
export default function ExampleIconButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  
  return <IconButton icon="fa fa-address-book" onClick={handleClick}>
    Click me
  </IconButton>
}
