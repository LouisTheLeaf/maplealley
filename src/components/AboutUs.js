import React, { Component } from 'react';
import fire from './../utils/firebase'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Container, Button} from 'semantic-ui-react';
import img5 from '../img/maple-leaf-two.png'

class AboutUs extends Component {
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
    this.props.history.push('/About Us')
  }

  render() {
    let button = (
      <Button
        onClick={this.link}>
        Button Link
      </Button>
    )
    return (
      <Container>
          <img src={img5} className="logo" alt="logo"/>
          <t1>About Us!</t1>
          <img src={img5} className="logo2" alt="logo"/>
          <br/> <br/>
          <t2>Who is behind Maple Alley?</t2>
      </Container>
    )
  }
}

export default withRouter(AboutUs);
