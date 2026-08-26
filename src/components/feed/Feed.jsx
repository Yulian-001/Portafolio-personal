import React from 'react';
import posts from '../../data/posts.json'
import PostCard from './PostCard';


export default function Feed() {
    return (
    <div className='feed-container'>
        {posts.map((post) =>(
            <PostCard
            key={post.id}
            post={post}
            />
        ))}

    </div>
    )
}
