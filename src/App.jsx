import posts from './data/posts.json'
import PostCard from './components/feed/PostCard'
import Profile from './components/feed/Profile'
import profile from './data/profile.json'

export default function App() {
  return (
    <main className="  bg-[var(--color-fondo)]">
      <div className=' flex gap-6 mx-12'>
      <section >

        {posts.map((item)=>(
          <PostCard key={item.id} post={item} />
      ))}

      </section>
      <section>

        {profile.map((item)=>(
        <Profile key={item.id} prof={item} />
      ))}
      </section>
      </div>
    </main>
  )
}
