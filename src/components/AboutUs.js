import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import AboutUsAccordion from '../components/AboutUsAccordion';
import img5 from '../img/maple-leaf-two.png';

class AboutUs extends Component {
  state = {
    value: 'hello',
  }

  link = () => {
    this.props.history.push('/About Us')
  }

  render() {
    return (
      <Container>
          <br/>
          <img src={img5} className="logo" alt="logo"/>
          <t1>¡About Us!</t1>
          <img src={img5} className="logo2" alt="logo"/>
          <br/><br/>
          <t2><u>Who is behind Leafania?</u></t2>
          <br/><br/>
          <AboutUsAccordion/>
      </Container>
    )
  }
}

export default withRouter(AboutUs);
