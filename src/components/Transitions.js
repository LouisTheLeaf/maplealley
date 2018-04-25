import React, { Component } from 'react';
import { Form, Grid, Image, Transition } from 'semantic-ui-react';
import herb1 from '../img/herb.png';
import herb2 from '../img/herb2.png';

const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce']

const options = transitions.map(name => ({ key: name, text: name, value: name }))

export default class TransitionExampleTransitionExplorer extends Component {
  state = { animation: transitions[0], duration: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { animation, duration, visible } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column as={Form}>
          <Form.Select
            label='Choose transition'
            name='animation'
            onChange={this.handleChange}
            options={options}
            value={animation}
          />
          <Form.Input
            label={`Duration: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={duration}
          />
          <Form.Button content='Run' onClick={this.toggleVisibility} />
        </Grid.Column>

        <Grid.Column>
          <Transition animation={animation} duration={duration} visible={visible}>
            <Image centered size='small' src={herb1} />
          </Transition>
        </Grid.Column>
      </Grid>
    )
  }
}
