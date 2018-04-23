import React from 'react'

class EyesOnMe extends React.Component {
    constructor(props){
      super()

    }

    render(){
      return (
        <button value="hi" onFocus={()=>console.log('Good!')} onBlur={()=>console.log('Hey! Eyes on me!')}/>
      )
    }
}

export default EyesOnMe
