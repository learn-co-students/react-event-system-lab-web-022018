// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
  logIt = () => {
    console.log('Entering password...')
  }
  render(){
    return(
      <input type="password" onKeyUp={this.logIt} />
    )
  }
}
export default Keypad
