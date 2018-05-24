import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Embed, Form, Checkbox, Button} from 'semantic-ui-react';
import img3 from '../img/maple-leaf-four.png';

class Quiz extends Component {
  state = {
     valueOne: '__?__',
     valueTwo: '__?__',
     valueThree: '__?__',
     score: 0,
  }
  handleChangeOne = (e, { valueOne }) => this.setState({ valueOne })
  handleChangeTwo = (e, { valueTwo }) => this.setState({ valueTwo })
  handleChangeThree = (e, { valueThree }) => this.setState({ valueThree })
  scoreText(){
    if (this.valueOne == 'trees') {
        this.setState({ score: this.state.score + 1 });
    } if (this.valueTwo == 'Nitrogen') {
        this.setState({ score: this.state.score + 1 });
    } if (this.valueThree == 'midrib') {
       this.setState({ score: this.state.score + 1 });
    }
  }
  render() {
    return (
      <Container>
          <img src={img3} className="logo" alt="logo"/>
          <t1>Quiz - Score: {this.state.score}</t1>
          <img src={img3} className="logo" alt="logo"/>
          <br/><br/>
      
              <Form>
                <Form.Field>
                  Leaves grow on <b>{this.state.valueOne}</b>.
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='rocks'
                    name='checkboxRadioGroup'
                    valueOne='rocks'
                    checked={this.state.valueOne === 'rocks'}
                    onChange={this.handleChangeOne}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='clouds'
                    name='checkboxRadioGroup'
                    valueOne='clouds'
                    checked={this.state.valueOne === 'clouds'}
                    onChange={this.handleChangeOne}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='trees'
                    name='checkboxRadioGroup'
                    valueOne='trees'
                    checked={this.state.valueOne === 'trees'}
                    onChange={this.handleChangeOne}
                  />
                </Form.Field>
              </Form>
            
              <Form>
                <Form.Field>
                  Leaves rely on <b>{this.state.valueTwo}</b> the most.
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='Nitrogen'
                    name='checkboxRadioGroup'
                    valueTwo='Nitrogen'
                    checked={this.state.valueTwo === 'Nitrogen'}
                    onChange={this.handleChangeTwo}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='Phosphorus'
                    name='checkboxRadioGroup'
                    valueTwo='Phosphorus'
                    checked={this.state.valueTwo === 'Phosphorus'}
                    onChange={this.handleChangeTwo}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='Potassium'
                    name='checkboxRadioGroup'
                    valueTwo='Potassium'
                    checked={this.state.valueTwo === 'Potassium'}
                    onChange={this.handleChangeTwo}
                  />
                </Form.Field>
              </Form>
            
              <Form>
                <Form.Field>
                  The main vein in the middle of every leaf is called the <b>{this.state.valueThree}</b>.
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='vein'
                    name='checkboxRadioGroup'
                    valueThree='vein'
                    checked={this.state.valueThree === 'vein'}
                    onChange={this.handleChangeThree}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='midrib'
                    name='checkboxRadioGroup'
                    valueThree='midrib'
                    checked={this.state.valueThree === 'midrib'}
                    onChange={this.handleChangeThree}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    label='main vein'
                    name='checkboxRadioGroup'
                    valueThree='main vein'
                    checked={this.state.valueThree === 'main vein'}
                    onChange={this.handleChangeThree}
                  />
                </Form.Field>
              </Form>
          <Button onClick={this.scoreText()} animated='fade' size='medium'>
              <Button.Content visible>
                Submit
              </Button.Content>
              <Button.Content hidden>
                Submit!
              </Button.Content>
          </Button>
      </Container>
    )
  }
}

export default withRouter(Quiz);
