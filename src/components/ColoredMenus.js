import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import img1 from '../img/maple-leaf-two.png'
import img2 from '../img/maple-leaf-three.png'
import img3 from '../img/maple-leaf-four.png'

const colorsA = ['Home', 'Directory', 'Quizes', 'Forums', 'About Us', 'Contact Us']

export default class ColoredMenus extends Component {
  state = {
    activeItem: '',
    activeA: colorsA[0],
    itemOne: true,
    itemTwo: false,
    itemThree: false,
  }

  handleAClick = (e, { name }) => this.setState({ activeA: name, activeItem: name })

  link1 = () => {
    this.props.history.push('/')
  }

  pressed = (e, {name}) => {
    this.handleAClick();
  }
  render() {
    const {activeItem, itemOne, itemThree, itemTwo, activeA, } = this.state

    return (
      <div>
        <Menu>
          {colorsA.map(c => (
            <Menu.Item  key={c} name={c} active={activeA === c} color='red' onClick={this.handleAClick} />
          ))}
        </Menu>
      </div>
    )
  }
}
