import React from 'react';
import axios from 'axios';
import { Grid, List, Container, Card, Image, Button, } from 'semantic-ui-react';
import Breweries from './Breweries';

class Beers extends React.Component {
  state = { beers: [], info: [] };

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        this.setState({ info: res.data, beers: res.data.entries});
      })
    }

  displayBeers = () => {
    return this.state.beers.map( (beer, i) => {
        return(
        <Card key={i}>
          <Card.Content>
            <Card.Header>
              {beer.name}
            </Card.Header>
            <Card.Description>
              Style: {beer.style.category.name}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='blue'>View</Button>
            </div>
          </Card.Content>
        </Card>
        )
    } )
  }

  render() {
    return(
      <Container style={styles}>
        <Card.Group>
          {this.displayBeers()}
        </Card.Group>
      </Container>
      )
    }
  }

  const styles = {
    backgroundColor: 'white',
    marginTop: '45px',
    width: '80%',
  }

export default Beers;
