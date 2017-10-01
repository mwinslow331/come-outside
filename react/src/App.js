import React, { Component } from 'react';
import { Router, browserHistory, Link, IndexRoute } from 'react-router';
import NavBar from './containers/NavBar';

class App extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
        </Route>
      </Router>

    )
  }
}

export default App;
