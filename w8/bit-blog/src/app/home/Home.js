import React, { Component } from 'react';
import PostList from '../posts/postList';
import PostItem from '../postItem/postItem';
import Authors from '../authors/authors';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props)


  }

  componentDidMount() {
    console.log("component did mount");

  }

  render() {
    return (
      <div>
        <PostList/>
      </div>
    )
  }
}
export default Home;