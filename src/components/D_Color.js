import React, { Component } from 'react';
import { Container, Button} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import {Switch,Route} from 'react-router';
import logo from '../img/maple-leaf.png';

class D_Color extends Component {

  backLink = () => {
    this.props.history.push('/Directory')
  }
  render() {
    let backButton = (
      <Button
        onClick={this.backLink}>
         Back To Directory
      </Button>
    )
    return (
      <Container>
        <br/>
        Color
        <br/>
        {backButton}
      </Container>
    );
  }
}

export default withRouter(D_Color);
