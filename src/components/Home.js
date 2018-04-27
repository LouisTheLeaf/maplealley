import React, { Component } from 'react';
import fire from './../utils/firebase';
import {withRouter} from 'react-router-dom';
import {Container, Embed} from 'semantic-ui-react';
import img1 from '../img/maple-leaf.png';
import Accordion from '../components/HomeAccordion';
import Transitions from '../components/Transitions';
import Playlist from '../components/YT_PlaylistEmbed';

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
          <br/>
          <img src={img1} className="logo" alt="logo"/>
          <t1>¡Leafania Home!</t1>
          <img src={img1} className="logo2" alt="logo"/>
          <br/><br/>
          <Accordion/>
      </Container>
    )
  }
}

export default withRouter(Home);
