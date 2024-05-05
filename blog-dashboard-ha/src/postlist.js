import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts, deletePost }) {
    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <Link to={`/edit/${post.id}`}>Edit</Link>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default PostList;
