import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CreatePost from './createpost'; 
import EditPost from './editpost'; 
import PostList from './postlist';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const editPost = (editedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === editedPost.id ? editedPost : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Wrap all your routes inside <Routes> */}
          <Route path="/create" element={<CreatePost addPost={addPost} />} /> {/* Use element prop to specify the component */}
          <Route path="/edit/:id" element={<EditPost posts={posts} editPost={editPost} />} />
          <Route path="/" element={<PostList posts={posts} deletePost={deletePost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
