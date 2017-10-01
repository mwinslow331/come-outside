import React, { Component } from 'react';
import { Router, browserHistory, Link, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
          // <Route path='new_event' name='new_event' component={NewEvent}/>
          // <Route path='event_profile' name='event_profile' component={EventProfile}/>
          // <Route path='user_profile' name='user_profile' component={UserProfile}/>
        </Route>
      </Router>

    )
  }
}

export default App;
