import React from 'react'

class EyesOnMe extends React.Component{
blurEvent = () =>{
console.log('Good!')
}
focusEvent = () =>{
console.log('Hey! Eyes on me!')
}

  render(){
    return(
      <div>
      <button onFocus={this.blurEvent} onBlur={this.focusEvent}>Eyes on me, please!</button>
      </div>
    )
  }
}

export default EyesOnMe
