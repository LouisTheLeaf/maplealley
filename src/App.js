import React, { Component } from 'react';
import './App.css';
import Menus from './components/Menus';
import Home from './components/Home';
import Directory from './components/Directory';
import D_History from './components/D_History';
import D_Color from './components/D_Color';
import Quiz from './components/Quiz'
import AboutUs from './components/AboutUs';
import PageNotFound from './components/PageNotFound';
import {withRouter} from 'react-router-dom';
import {Switch,Route} from 'react-router';

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="Maple">
        <Menus/>
        <Switch>
            <Route exact path='/Home' component={Home}/>
            <Route exact path='/Directory' component={Directory}/>
            <Route exact path='/Directory/History' component={D_History}/>
            <Route exact path='/Directory/Color' component={D_Color}/>
            <Route exact path='/Quiz' component={Quiz}/>
            <Route exact path='/About Us' component={AboutUs}/>
            <Route path='/' component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
