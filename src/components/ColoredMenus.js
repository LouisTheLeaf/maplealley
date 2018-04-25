import React, { Component } from 'react';
import { Menu, } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

const colorsA = ['Home', 'Directory', 'Quizes', 'Forums', 'About Us']

class ColoredMenus extends Component {
  state = {
    activeA: colorsA[0],
  }

  handleAClick = (e, { name }) => this.setState({ activeA: name })

  link1 = () => {
    this.props.history.push('/Home');
    this.setState({ activeA: 'Home'});
  }
  link2 = () => {
    this.props.history.push('/Directory');
    this.setState({ activeA: 'Directory'});
  }
  link3 = () => {
    this.props.history.push('/Quizzes');
    this.setState({ activeA: 'Quizzes'});
  }
  link4 = () => {
    this.props.history.push('/Forums');
    this.setState({ activeA: 'Forums'});
  }
  link5 = () => {
    this.props.history.push('/About Us');
    this.setState({ activeA: 'About Us'});
  }

  render() {
    const { activeA } = this.state

    return (
      <div alignItem='center'>
        <Menu style={{backgroundColor:'rgba(244, 104, 66, 0.45)',alignItem:'center'}} fluid widths={5}>
            <Menu.Item  key={'Home'} name={'Home'} active={activeA === 'Home'} color='red' onClick={this.link1}/>
            <Menu.Item  key={'Directory'} name={'Directory'} active={activeA === 'Directory'} color='red' onClick={this.link2}/>
            <Menu.Item  key={'Quizzes'} name={'Quizzes'} active={activeA === 'Quizzes'} color='red' onClick={this.link3}/>
            <Menu.Item  key={'Forums'} name={'Forums'} active={activeA === 'Forums'} color='red' onClick={this.link4}/>
            <Menu.Item  key={'About Us'} name={'About Us'} active={activeA === 'About Us'} color='red' onClick={this.link5}/>
        </Menu>
      </div>
    )
  }
}

export default withRouter(ColoredMenus);
