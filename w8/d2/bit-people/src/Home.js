import React, { Component } from 'react';
import Header from './app/partials/Header';
import UserGrid from './users/UserGrid';
import { userService } from './users/userService';
import Footer from './app/partials/Footer';
import UserList from './users/UserList';
import Search from './app/partials/Search';
import LoadingCube from './LoadingCube';
import NoUserMatch from './shared/utils/NoUserMatch';

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			users: [],
			filteredUsers: [],
			showGrid: false,
			inputValue: "",
			noMatch: true
		}
	}

	componentDidMount() {

		if (localStorage.getItem('showGrid')) {
			this.setState({
				showGrid: JSON.parse(localStorage.getItem('showGrid'))
			})
		}
		if (localStorage.getItem('Users')) {
			this.setState({
				users: JSON.parse(localStorage.getItem('Users')),
				filteredUsers: JSON.parse(localStorage.getItem('Users'))
			})
		} else {
			this.fetchUsers();
		}
	}

	fetchUsers = () => {
		userService.fetchUsers()
			.then((usersData) => {
				this.setState({
					users: usersData,
					filteredUsers: usersData,
					noMatch: true

				})
				localStorage.setItem('Users', JSON.stringify(usersData));

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

	handleChange = (event) => {
		this.setState({
			inputValue: event.target.value
		})

		let searchResults = this.state.users.filter(el => {
			return el.name.toLowerCase().indexOf(event.target.value) !== -1
		})

		this.setState({
			filteredUsers: searchResults

		});
	}

	render() {
		return (
			<React.Fragment>
				<Header title="BIT People" handleRefresh={this.handleRefresh} handleToggle={this.handleToggle} showList={this.state.showGrid} />
				<div className="container">
					<Search handleChange={this.handleChange} inputValue={this.state.inputValue} />
					{this.state.users.length === 0 ? <LoadingCube /> : ""}
					{(this.state.filteredUsers.length === 0) && (this.state.noMatch === true) ? <NoUserMatch /> : ""}
					{this.state.showGrid ? <UserGrid users={this.state.filteredUsers} /> : <UserList users={this.state.filteredUsers} />}
				</div>
				<Footer />

			</React.Fragment>
		);
	}
}

export default Home;