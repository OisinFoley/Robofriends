import React, { Component } from 'react'
import CounterButton from './CounterButton';

/* 
  can also use PureComponent, but only does shallow dtate change check so may not always be accurate
*/

class Header extends Component {

  // avoid unnecessary re-render
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('header component');
    return (
      <div>
        <h1 className='f1'>Robofriends</h1>
        <CounterButton />
      </div>
    );

  }
}

export default Header;
