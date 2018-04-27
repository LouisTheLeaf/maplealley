import React, { Component } from 'react';
import fire from './../utils/firebase';
import {withRouter} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import img2 from '../img/maple-leaf-three.png';
import TableGrid from '../components/TableGrid';

class Directory extends Component {
  state = {
    value: 'hello',
  }

  link = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <Container>
          <br/>
          <img src={img2} className="logo"/>
          <t1>Directory</t1>
          <img src={img2} className="logo2"/>
          <br/><br/>
          <t2>
              Here you will find every piece of information and data
              we have collected and released for all to see and learn!
          </t2>
          <br/><br/>
          <TableGrid/>
      </Container>
    )
  }
}

export default withRouter(Directory);
