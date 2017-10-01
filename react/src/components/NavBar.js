import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h1>Nav Bar</h1>
        <p>
          <Link to='/'>Profile</Link>
        </p>
      </div>
    )
  }
}

export default NavBar;
