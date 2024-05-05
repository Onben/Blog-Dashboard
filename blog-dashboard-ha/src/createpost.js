import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            id: Math.floor(Math.random() * 10000),
            title,
            content,
        };
        addPost(post);
        navigate('/');
    };

    return (
        <div>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreatePost;
