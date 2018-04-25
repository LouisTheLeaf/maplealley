import React, { Component } from 'react';
import fire from './../utils/firebase';
import {withRouter} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import img1 from '../img/maple-leaf.png';
import Transitions from '../components/Transitions';

class Home extends Component {
  state = {
    value: 'hello',
  }

  componentDidMount(){
    let leafian = this
    fire.database().ref('/').on('value', (snapshot) => {
      leafian.setState({value: console.log(snapshot.val().section1)})
      console.log('Data Updated')
    });
  }
  writeData = () => {
    fire.database(). ref('/').set({
      nestedObject: this.state.newValue
    })
  }

  link = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <Container>
          <img src={img1} className="homelogo"/>
          <Transitions/>
      </Container>
    )
  }
}

export default withRouter(Home);
