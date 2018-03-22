import React, { Component } from 'react';
import fire from './../utils/firebase'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Container, Button, Grid, Image,} from 'semantic-ui-react';
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
    const Grid = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='../img/maple-leaf.png' />
        <t3>Maple Leaves are great!</t3>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
    return (
      <Container>
          <br/>
          <img src={img2} className="logo" alt="logo"/>
          <t1>¡Directory!</t1>
          <img src={img2} className="logo2" alt="logo"/>
          <br/><br/>
          <t2>Here you will find every piece of information and data
              we have collected and released for all to see and learn!
          </t2>
          <br/><br/>
          {Grid}
      </Container>
    )
  }
}

export default withRouter(Directory);
