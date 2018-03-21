import React, { Component } from 'react';
import Header from './app/partials/Header';
import UserGrid from './users/UserGrid';
import { userService } from './users/userService';
import Footer from './app/partials/Footer';
import UserList from './users/UserList';

// import newMail from './shared/utils/formatMail'
// import newDate from './shared/utils/formatDate'
// import users from './users/users';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      showGrid: false
    }
  }

  componentDidMount() {
      this.fetchUsers();
      
      localStorage.getItem('showGrid');

    }

    fetchUsers = () => {
      userService.fetchUsers()
        .then((usersData) => {
          this.setState({
            users: usersData
          })
        })
    }

    handleRefresh = (e) => {
      this.fetchUsers();
    }

    handleToggle = (e) => {
      localStorage.setItem('showGrid', !this.state.showGrid);
      this.setState((prevState) => {
        return {
          showGrid: !prevState.showGrid,
        }
      })

    }

    render() {
      return (
        <React.Fragment>
          <Header title="BIT People" handleRefresh={this.handleRefresh} handleToggle={this.handleToggle} showList={this.state.showGrid} />
          <div className="container">
            {this.state.showGrid ? <UserGrid users={this.state.users} /> : <UserList users={this.state.users} />}
          </div>

          <Footer />
        </React.Fragment>
      );
    }

  }
  export default Home;