import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import logo from '../img/herb.png';
import background from '../img/tree-with-sunset.gif';
import ColoredMenus from '../components/ColoredMenus';

class Menus extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="logo3" alt="logo" />
          <h1 className="title">Welcome to Leafania</h1>
        </header>
        <ColoredMenus/>
      </div>
    )
  }
}

export default Menus;
