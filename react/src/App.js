import React, { Component } from 'react';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import PropTypes from 'prop-types';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}

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
