import React, {Component} from 'react'
import { Header, Table, Rating, Container, Button} from 'semantic-ui-react'
import img2 from '../img/maple-leaf-three.png';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class TableGrid extends Component {

  historyLink = () => {
    this.props.history.push('/Directory/History')
  }
  colorLink = () => {
    this.props.history.push('/Directory/Color')
  }

  render() {
    let fadeHistoryButton = (
      <Button animated='fade' size='large'>
      <Button.Content visible>
        History
      </Button.Content>
      <Button.Content hidden
        onClick={this.historyLink}>
        GO!
      </Button.Content>
    </Button>
  )
    let fadeColorButton = (
      <Button animated='fade' size='large'>
      <Button.Content visible>
        Color
      </Button.Content>
      <Button.Content hidden
        onClick={this.colorLink}>
        GO!
      </Button.Content>
    </Button>
    )
    const color = 'rgba(244, 104, 66, 0.35)';
    return (
      <Container>
          <Table celled padded
            style={{backgroundColor:'rgba(12, 211, 117,0.35)',color:'rgba(0,0,0,1.0)'}}
            color={color} key={color} inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
                <Table.HeaderCell>Link</Table.HeaderCell>
                <Table.HeaderCell>Immportance Rating</Table.HeaderCell>
                <Table.HeaderCell>Consensus</Table.HeaderCell>
                <Table.HeaderCell>Details</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h2' textAlign='center'>A-</Header>
                </Table.Cell>
                <Table.Cell singleLine>{fadeHistoryButton}</Table.Cell>
                <Table.Cell>
                  <Rating icon='star' defaultRating={5} maxRating={5} disabled='true'/>
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    100% <br />
                  <a href='#'>67 Studies</a>
                </Table.Cell>
                <Table.Cell>
                  <t4>
                    The History of Leaves and how they have made an impact in
                    our world in a massive one. They helped Determine quite a
                    few events and foretold disasters that were prevented.
                  </t4>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h2' textAlign='center'>B+</Header>
                </Table.Cell>
                <Table.Cell singleLine>{fadeColorButton}</Table.Cell>
                <Table.Cell>
                  <Rating icon='star' defaultRating={4} maxRating={5} disabled='true'/>
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    83% <br />
                  <a href='#'>29 Studies</a>
                </Table.Cell>
                <Table.Cell>
                  <t4>
                    The colors of leaves reveal a lot of information of it’s
                    contents, illness, plagues, and time of a season!
                  </t4>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
      </Container>
    )
  }
}

export default withRouter(TableGrid)
