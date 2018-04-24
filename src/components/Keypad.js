// Code Keypad Component Here
//  use an <input type="password" /> field to capture input.
//  In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.

import React from 'react';

class Keypad extends React.Component{
  // constructor(){  }
  press = ()=>{console.log('Entering password...');}
  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.press}/>
      </div>
    )
  }
}

export default Keypad
