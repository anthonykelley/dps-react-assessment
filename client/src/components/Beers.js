import React from 'react';
import axios from 'axios';
import { Grid, List } from 'semantic-ui-react';
import Breweries from './Breweries';

class Beers extends React.Component {
  state = { beers: [], };
  
  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        const beers = res.data;
        console.log(beers.entries);
        this.setState({beers: beers.entries});
      })
    }

  render() {
    return(
      <div style={styles}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h1>Beers</h1>
              <List bulleted>
                {Object.keys(this.state.beers).map((key) => (
                  <div>
                    <span>{this.state.beers[key].name}</span>
                  </div>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <h1>Breweries</h1>
              <List bulleted>
                <Breweries />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const styles = {
  color: 'white',
}

export default Beers;