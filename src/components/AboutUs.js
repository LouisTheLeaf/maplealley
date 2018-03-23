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
    return (
      <Container>
          <br/>
          <img src={img5} className="logo" alt="logo"/>
          <t1>¡About Us!</t1>
          <img src={img5} className="logo2" alt="logo"/>
          <br/><br/>
          <t2><u>Who is behind Maple Alley?</u></t2>
          <br/><br/>
          <t3>We are Maple Alley, a group of three individuals that work
          hard toward making a website that provides not only information,
          but also an experience that makes an impact on our goal to
          educate the future generations!
          </t3>
          <br/><br/>
          <t3>Luis Hernandez - The engineer behind the coding of the website
              and for the upkeep and prosperity of Maple Alley!
          </t3>
          <br/><br/>
          <t3>Miriam Guevara - The scientist responsible for all that Maple
              Alley has to offer, each detail is checked by her vast
              experience!
          </t3>
          <br/><br/>
          <t3>Roberto Hernandez - The community leader that checks up on the
              Forums to make sure everyone’s questions are answered!
          </t3>
      </Container>
    )
  }
}

export default withRouter(AboutUs);
