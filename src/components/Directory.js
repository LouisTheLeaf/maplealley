import React, { Component } from 'react';
import fire from './../utils/firebase'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Container, Button} from 'semantic-ui-react';
import img2 from '../img/maple-leaf-three.png'

class Directory extends Component {
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
    let button = (
      <Button
        onClick={this.link}>
        Button Link
      </Button>
    )
    return (
      <Container>
          <img src={img2} className="logo" alt="logo"/>
      </Container>
    )
  }
}

export default withRouter(Directory);