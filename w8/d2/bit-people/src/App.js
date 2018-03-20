import React, { Component } from 'react';
import Header from './app/partials/Header';
import UserGrid from './users/UserGrid';
import { userService } from './users/userService';
import Footer from './app/partials/Footer';
// import newMail from './shared/utils/formatMail'
// import newDate from './shared/utils/formatDate'
// import users from './users/users';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users :[]
    }
  }

  componentDidMount() {
    userService.fetchUsers()
      .then((usersData) => {
        this.setState({
          users: usersData
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div><Header title="BIT People" /></div>
        <div className="container">
          <UserGrid users={this.state.users}/>
        </div> 
        <div><Footer/></div>
      </React.Fragment>
    );
  }

}

export default App;
