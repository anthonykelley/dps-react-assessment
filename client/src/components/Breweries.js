import React from 'react';
import axios from 'axios';
import { Grid, List } from 'semantic-ui-react';

class Breweries extends React.Component {
  state = { breweries: [], };
  
  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => {
        const breweries = res.data;
        console.log(breweries.entries);
        this.setState({breweries: breweries.entries});
      })
    }

  render() {
    return(
      <div>
        {Object.keys(this.state.breweries).map((key) => (
          <div>
            <span>{this.state.breweries[key].name}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default Breweries;