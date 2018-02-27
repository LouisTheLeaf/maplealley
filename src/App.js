import React, { Component } from 'react';
import './App.css';
import Menus from './components/Menus';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import {withRouter} from 'react-router-dom';
import {Switch,Route} from 'react-router';
import logo from './img/maple-leaf.png'

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Menus/>
        <Switch>
            <Route exact path='/Home' component={Home}/>
            <Route exact path='/Directory' />
            <Route exact path='/Quizzes' />
            <Route exact path='/Forums' />
            <Route exact path='/About Us' />
            <Route path='/' component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
