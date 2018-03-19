import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import usersData from './app/users/users.js';
import UserList from './app/users/UserList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <UserList items={usersData} />
      </div>
    );
  }
}

export default App;
