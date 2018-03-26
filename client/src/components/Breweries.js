import React from 'react';
import axios from 'axios';
import { Grid, List } from 'semantic-ui-react';

class Breweries extends React.Component {
  state = { breweries: [], info: [] };

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => {
        this.setState({info: res.data, breweries: res.data.entries});
      })
    }

  displayBreweries = () => {
    return this.state.breweries.map( (brew, i) => {
      return(
      <div key={i}>
        <span>{brew.name}</span>
      </div>
      )
    } )
  }

  render() {
    return(
      <div>
        {this.displayBreweries()}
      </div>
    )
  }
}

export default Breweries;
