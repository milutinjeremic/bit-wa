import React, { Component } from 'react';
import PostList from '../posts/postList';


import { postService } from '../PostService';


class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			
			
		}
		
	}
	
	componentDidMount() {
		postService.fetchPosts()
		.then((response) => {
			this.setState({
				posts: response
			})
			
	})

}



render() {
	return (
		<div>
			<PostList posts={this.state.posts}/>
			
		</div>
	)
}
}
export default Home;