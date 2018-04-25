import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import img4 from '../img/maple-leaf-five.png';

class Forums extends Component {
  render() {
    return (
      <Container>
          <img src={img4} className="logo" alt="logo"/>
      </Container>
    )
  }
}

export default withRouter(Forums);
