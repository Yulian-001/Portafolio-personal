import posts from './data/posts.json'
import PostCard from './components/feed/PostCard'
import Profile from './components/feed/Profile'
import profile from './data/profile.json'

export default function App() {
  return (
    <main className=" bg-[var(--color-fondo)]">
      <section>

        {posts.map((item)=>(
          <PostCard key={item.id} post={item} />
      ))}

      </section>
      <section>

        {profile.map((item)=>(
        <Profile key={item.id} prof={item} />
      ))}
      </section>
      
    </main>
  )
}
