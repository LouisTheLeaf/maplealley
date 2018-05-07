import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Embed} from 'semantic-ui-react';
import img3 from '../img/maple-leaf-four.png';

class Quizzes extends Component {
  state = {
    value: 'hello',
  }

  link = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <Container>
          <img src={img3} className="logo" alt="logo"/>
      </Container>
    )
  }
}

export default withRouter(Quizzes);
