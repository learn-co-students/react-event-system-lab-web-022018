import React from 'react';

class EyesOnMe extends React.Component {

  ewgood = () => {
    console.log("Good!")
  }

  ewbad = () => {
    console.log("Hey! Eyes on me!")
  }


  render () {
    return (
      <button onFocus={this.ewgood} onBlur={this.ewbad}>
        Eyes on me, please!</button>
    )
  }
}


export default EyesOnMe;
