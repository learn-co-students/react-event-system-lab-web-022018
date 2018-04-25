// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
  focusLogIt = () => {
    console.log('Good!')
  }
  blurLogIt = () => {
    console.log('Hey! Eyes on me!')
  }
  render(){
    return(
      <button onFocus={this.focusLogIt} onBlur={this.blurLogIt}/>
    )
  }
}
export default EyesOnMe
