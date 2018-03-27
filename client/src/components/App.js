import React, { Component } from 'react';
import Beers from './Beers';
import Breweries from './Breweries';
import Glass from './Glass';
import Location from './Location';
import Menu from './Menu';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/breweries' component={Breweries} />
          <Route exact path='/glassware' component={Glass} />
          <Route exact path='/locations' component={Location} />
          <Route exact path='/Home' component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
