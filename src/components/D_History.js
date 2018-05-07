import React, { Component } from 'react';
import { Container, Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import {Switch,Route} from 'react-router';
import logo from '../img/maple-leaf.png';
import _ from 'lodash'

class D_History extends Component {

  backLink = () => {
    this.props.history.push('/Directory')
  }
  render() {
    return (
      <Modal trigger={<Button>Scrolling Content Modal</Button>}>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image
          size='medium'
          src={logo}
          wrapped
        />

        <Modal.Description>
          <Header>Modal Header</Header>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Proceed <Icon name='right chevron' />
        </Button>
      </Modal.Actions>
    </Modal>
    );
  }
}

export default withRouter(D_History);
