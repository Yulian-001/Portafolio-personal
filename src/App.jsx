import posts from './data/posts.json'
import PostCard from './components/feed/PostCard'
import Profile from './components/feed/Profile'
import profile from './data/profile.json'

export default function App() {
  return (
    <main className=" bg-[var(--color-fondo)] ">
      <div className='flex flex-col justify-start  gap-6  md:flex-row  mx-6 lg:mx-16 py-6  '>
      <section className='-translate-x-12 '>

        {posts.map((item)=>(
          <PostCard key={item.id} post={item} />
      ))}

      </section>
      <section className=''>

        {profile.map((item)=>(
        <Profile key={item.id} prof={item} />
      ))}
      </section>
      </div>
    </main>
  )
}
