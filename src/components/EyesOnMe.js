// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  focus=()=>(console.log('Good!'))

  blur = ()=>(console.log("Hey! Eyes on me!"))



  render(){
    return(
      <button id = "ugh" onFocus = {this.focus} onBlur={this.blur}>Eyes on me, please!</button>
    )
  }
}
