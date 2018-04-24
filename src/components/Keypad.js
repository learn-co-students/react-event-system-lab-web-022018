import React from 'react';

class Keypad extends React.Component {

  clicky = () => {
    console.log("Entering password...")
  }


  render () {
    return (
      <input type="password" onKeyUp={this.clicky}/>
    )
  }
}


export default Keypad
