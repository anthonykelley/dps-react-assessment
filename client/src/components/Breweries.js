import React from 'react';
import axios from 'axios';
import Linkify from 'react-linkify';
import { Grid, List, Container, Card, Image, Button, } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';

class Breweries extends React.Component {
  state = { brews: [], page: 1, totalPages: 0 };

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then( res => {
        this.setState({ brews: res.data.entries, totalPages: res.data.total_pages});
      })
    }

  loadMore = () => {
    const page = this.state.page + 1;
    axios.get(`/api/all_breweries?page=${page}`)
      .then( ({ data, headers  }) => {
        this.setState( state => {
          return { brews: [...state.brews, ...data.entries], page: state.page + 1  }
        })
      })
   }


  displayBrews = () => {
    return this.state.brews.map( (brew, i) => {
        return(
        <Card key={i}>
          <Card.Content>
            <Image floated='right' size='mini' src={brew.images? brew.images.icon :
              'https://upload.wikimedia.org/wikipedia/commons/6/6b/Boxing-Bear-Brewing-Logo.png'}
            />
            <Card.Header>
              {brew? brew.name : 'Untitled'}
            </Card.Header>
            <Card.Description>
              {brew.website? <Linkify>{brew.website}</Linkify> : 'Website Unknown'}
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
        <h1 style={{textAlign: 'center'}}>Brewery List</h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.page < this.state.totalPages}
          loader={<div className='loader' key={0}>Loading ...</div>}
        >
        {
        <Card.Group>
          {this.displayBrews()}
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

export default Breweries;
