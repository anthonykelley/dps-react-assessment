import React from 'react';
import axios from 'axios';
import { Grid, List } from 'semantic-ui-react';

class Beers extends React.Component {
  state = { beers: [], };
  
  componentDidMount() {
    axios.get('/api/random_beer')
      .then( res => {
        const beers = res.data;
        console.log(beers);
        this.setState({beers: beers});
      })
    }

  render() {
    return(
      <div style={styles}>
        {this.state.beers.name}
      </div>
    )
  }
}

const styles = {
  color: 'white',
}

export default Beers;