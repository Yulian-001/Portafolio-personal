import React from 'react'
import posts from './data/posts.json'
import PostCard from './components/feed/PostCard'

export default function App() {
  return (
    <main className='app-container'>
      <section className='feed-container'>

        {posts.map((item)=>(
      <PostCard key={item.id} post={item} />
    ))}

      </section>
    </main>
  )
}
