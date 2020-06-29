import React from 'react';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <h4>Add New Post</h4>
          <PostForm />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col">
          <h4>Synchronous Posts</h4>
          <Posts />
        </div>
        <div className="col">
          <h4>Asynchronous Posts</h4>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
