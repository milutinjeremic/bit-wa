import React, { Component } from 'react';
import './App.css';
import postsData from './blogPosts/posts.js';
import BlogList from './blogPosts/BlogList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Blog List</h1>
        <BlogList items={postsData} />
      </div>
    );
  }
}


export default App;