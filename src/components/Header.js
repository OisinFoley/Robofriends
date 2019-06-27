import React, { Component } from 'react'

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
    return <h1 className='f1'>Robofriends</h1>
  }
}

export default Header;
