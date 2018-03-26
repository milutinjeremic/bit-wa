import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../posts/PostItem';

const PostList = (props) => {
	return (
		<div className="container">
			<div className="row">
				<h3 className="title center">POSTS<button className="waves-effect waves-light btn"><Link to='/newPost'>New post</Link></button></h3>
				{props.posts.slice(0, 4).map((post) => {
					return <PostItem post={post} key={post.id} />
				})}
			</div>
		</div>
	)
}

export default PostList;