import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost({ posts, editPost }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const post = posts.find((post) => post.id === parseInt(id));
        if (post) {
            setTitle(post.title);
            setContent(post.content);
        }
    }, [id, posts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedPost = {
            id: parseInt(id),
            title,
            content,
        };
        editPost(editedPost);
        navigate('/');
    };

    return (
        <div>
            <h2>Edit Post</h2>
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
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditPost;
