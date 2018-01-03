import React from 'react';
import axios from 'axios';
import { Grid, List, Container } from 'semantic-ui-react';
import Breweries from './Breweries';

class Beers extends React.Component {
  state = { beers: [], };
  
  componentDidMount() {
    axios.get('/api/all_beers?page=1&per_page=5')
      .then( res => {
        const beers = res.data;
        console.log(beers.entries);
        this.setState({beers: beers.entries});
      })
    }

  render() {
    return(
      <Container style={styles}>
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} style={grid}>
              <h1 className='center'>Beers</h1>
              <List bulleted>
                {Object.keys(this.state.beers).map((key) => (
                  <div>
                    <span>{this.state.beers[key].name}</span>
                  </div>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column width={8} style={grid}>
              <h1>Breweries</h1>
              <List bulleted>
                <Breweries />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </Container>
    )
  }
}

const styles = {
  backgroundColor: 'white',
  marginTop: '45px',
}

const grid = {
  textAlign: 'center',
}

export default Beers;