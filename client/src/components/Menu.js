import React from 'react'
import { Card, Icon, Image, Container, Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const CardExampleCard = () => (
  <Container style={{width: '80%', paddingTop: '80px'}}>
    <Card.Group itemsPerRow={2}>
      <Card>
        <Image src='https://www.publicdomainpictures.net/pictures/170000/velka/beer-1462977849MwW.jpg' />
        <Card.Content>
          <Card.Header>
            Beers
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Link to='/beers'>
          <Button basic color='green'>Go To Beer List</Button>
          </Link>
        </div>
        </Card.Content>
      </Card>
      <Card>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/f/fb/Three_shotglasses.jpg' />
        <Card.Content>
          <Card.Header>
            Glasses
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Link to='/glassware'>
          <Button basic color='green'>Go To Beer Glassware List</Button>
          </Link>
        </div>
        </Card.Content>
      </Card>
      <Card>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Green_Beacon_Brewing_Company_08.jpg' />
        <Card.Content>
          <Card.Header>
            Breweries
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Link to='/breweries'>
          <Button basic color='green'>Go To Breweries List</Button>
          </Link>
        </div>
        </Card.Content>
      </Card>
      <Card>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/4/46/PinOnMap.png' />
        <Card.Content>
          <Card.Header>
          Locations
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Link to='/locations'>
          <Button basic color='green'>Go To Location List</Button>
          </Link>
        </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
    )
  export default CardExampleCard
