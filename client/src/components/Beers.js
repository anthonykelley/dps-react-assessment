import React from 'react';
import axios from 'axios';
import { Grid, List, Container, Card, Image, Button, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Breweries from './Breweries';
import InfiniteScroll from 'react-infinite-scroller';

class Beers extends React.Component {
  state = { beers: [], page: 1, totalPages: 0 };

  componentDidMount() {
    axios.get('/api/all_beers')
      .then( res => {
        this.setState({ beers: res.data.entries, totalPages: res.data.total_pages});
      })
    }

  loadMore = () => {
    const page = this.state.page + 1;
    axios.get(`/api/all_beers?page=${page}`)
      .then( ({ data, headers  }) => {
        this.setState( state => {
          return { beers: [...state.beers, ...data.entries], page: state.page + 1  }
        })
      })
   }


  displayBeers = () => {
    return this.state.beers.map( (beer, i) => {
        return(
        <Card key={i}>
          <Card.Content>
            <Card.Header>
              {beer? beer.name : 'Untitled'}
            </Card.Header>
            <Card.Description>
              Style: {beer.style? beer.style.category.name : 'Unknown'}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Link to={`/api/search_beers?query=${beer.name}`}>
                <Button basic color='blue'>View</Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
        )
    } )
  }

  render() {
    return(
      <Container style={styles}>
        <h1 style={{textAlign: 'center'}}>Beer List</h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.page < this.state.totalPages}
          loader={<div className='loader' key={0}>Loading ...</div>}
        >
        {
        <Card.Group>
          {this.displayBeers()}
        </Card.Group>
        }
        </InfiniteScroll>
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
