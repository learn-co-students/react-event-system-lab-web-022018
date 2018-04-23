// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

  passwordCb = () => console.log('Entering password...')


  render(){
    return (
      <div className="Keypad">
      <input onKeyUp={this.passwordCb} type="password" />
      </div>
    )
  }
}

export default Keypad;
