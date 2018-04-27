import React, { Component } from 'react';
import logo from '../img/herb.png';
import ColoredMenus from '../components/ColoredMenus';

class Menus extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="logo3" alt="logo" />
          <h1 className="title">Leafania</h1>
        </header>
        <ColoredMenus/>
      </div>
    )
  }
}

export default Menus;
