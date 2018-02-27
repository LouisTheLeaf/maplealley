import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import logo from '../img/maple-leaf.png';
import background from '../img/tree-with-sunset.gif';
import ColoredMenus from '../components/ColoredMenus';

export default class Menus extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} className="logo" alt="logo" />
          <h1 className="App-title">Welcome to Maple Alley</h1>
        </header>
      </div>
    )
  }
}
