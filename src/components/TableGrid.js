import React, {Component} from 'react'
import { Header, Table, Rating, Container, Button} from 'semantic-ui-react'
import img2 from '../img/maple-leaf-three.png';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class TableGrid extends Component {

  historyLink = () => {
    this.props.history.push('/Home')
  }
  colorLink = () => {
    this.props.history.push('/Home')
  }

  render() {
    let historyButton = (
      <Button
        onClick={this.historyLink}>
        History
      </Button>
    )
    let colorButton = (
      <Button
        onClick={this.colorLink}>
         Color 
      </Button>
    )
    return (
      <Container>
          <Table celled padded>
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
                  <Header as='h2' textAlign='center'>A</Header>
                </Table.Cell>
                <Table.Cell singleLine>{historyButton}</Table.Cell>
                <Table.Cell>
                  <Rating icon='star' defaultRating={5} maxRating={5} />
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    100% <br />
                  <a href='#'>67 Studies</a>
                </Table.Cell>
                <Table.Cell>
                    The History of Leaves and how they have made an impact in
                    our world in a massive one. They helped Determine quite a
                    few events and foretold disasters that were prevented.
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Header as='h2' textAlign='center'>B</Header>
                </Table.Cell>
                <Table.Cell singleLine>{colorButton}</Table.Cell>
                <Table.Cell>
                  <Rating icon='star' defaultRating={4} maxRating={5} />
                </Table.Cell>
                <Table.Cell textAlign='right'>
                    83% <br />
                  <a href='#'>29 Studies</a>
                </Table.Cell>
                <Table.Cell>
                    The colors of leaves reveal a lot of information of it’s
                    contents, illness, plagues, and time of a season!
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
      </Container>
    )
  }
}

export default withRouter(TableGrid)
