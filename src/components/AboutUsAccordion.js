import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class HomeAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <t3>Luis Hernandez</t3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <t3>
              •The engineer behind the coding of the website and for the upkeep and prosperity of Leafania!
          </t3>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <t3>Miriam Guevara</t3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <t3>
            •The scientist responsible for all that Leafania has to offer, each detail is checked by her vast
             {' '}experience!
          </t3>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <t3>Roberto Hernandez</t3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <t3>
            •The community leader that checks up on the issues in Quizzes to make sure questions are up-to-date!
          </t3>
        </Accordion.Content>
      </Accordion>
    )
  }
}

export default HomeAccordion
