import React, { Component } from 'react';
import './App.css';
import Menus from './components/Menus';
import Home from './components/Home';
import Directory from './components/Directory';
import Quizzes from './components/Quizzes';
import AboutUs from './components/AboutUs';
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
            <Route exact path='/Directory' component={Home}/>
            <Route exact path='/Quizzes' component={Home}/>
            <Route exact path='/Forums' component={Home}/>
            <Route exact path='/About Us' component={Home}/>
            <Route path='/' component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
