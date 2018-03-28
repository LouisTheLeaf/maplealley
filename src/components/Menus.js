import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import logo from '../img/maple-leaf.png';
import background from '../img/tree-with-sunset.gif';
import ColoredMenus from '../components/ColoredMenus';

class Menus extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="logo" alt="logo" />
          <h1 className="App-title">Welcome to Maple Alley</h1>
        </header>
        <ColoredMenus/>
      </div>
    )
  }
}

export default Menus;
