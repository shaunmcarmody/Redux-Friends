import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friend from './components/Friend';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {
        !localStorage.getItem('token') ?
        <Link to="login">Login</Link> :
        null
      }
        
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends-list" component={FriendsList} />
        <PrivateRoute exact path="/friends-list/:id" component={Friend} />
      </div>
    );
  }
}

export default App;
