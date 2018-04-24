import React from 'react';

class keypad extends React.Component {

    handleInputPassword = () => console.log('Entering password...');

  render() {
      return (
        <div>
               <input
                 type="password"
                 onKeyUp={this.handleInputPassword}
               />
             </div>
          )
  }
}

export default keypad;
