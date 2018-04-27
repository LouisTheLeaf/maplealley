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
          <t3>What is Leafania?</t3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <t3>
              This site is dedicated for your complete learning of the vast study of trees' foliage, or in layman's terms, leaves!
          </t3>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <t3>Why learn from Leafania</t3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <t3>
            Be sure to explore our site thoroughly and learn from our interesting, vast knowledge! We have a lot of information
            that is readily available to you!
          </t3>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <t3>What are the Sub-Sites</t3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <t3>
            •The Directory contains all the information you seek. I has multiple studies that back up the information and ratings 
            {' '}on how useful people found the infomation to be!
          </t3>
          <br/>
          <t3>
            •The Quizzes tab contains quizzes that test you on your knowledge and hone your eyes on the information that you find
            {' '}difficult.
          </t3>
          <br/>
          <t3>
            •The Forums are a place where you may speak out your concerns and questions. Find something questionable, tell us and 
            {' '}we will look into it for you!
          </t3>
        </Accordion.Content>
      </Accordion>
    )
  }
}

export default HomeAccordion
