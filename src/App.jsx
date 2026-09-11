import React from 'react'
import posts from './data/posts.json'
import PostCard from './components/feed/PostCard'

export default function App() {
  return (
    <main className=" bg-[var(--color-fondo)]">
      <section className='feed-container'>

        {posts.map((item)=>(
      <PostCard key={item.id} post={item} />
    ))}

      </section>
    </main>
  )
}
