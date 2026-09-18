import posts from './data/posts.json'
import PostCard from './components/feed/PostCard'
import Profile from './components/feed/Profile'
import profile from './data/profile.json'
import CallSidebar from './components/feed/CallSidebar'
import { useState } from 'react'
import { ArrowSidebar } from './components/feed/ProfileIcons'


export default function App() {

      const [ isSidebarOpen,setIsSidebarOpen] = useState(false);


  return (
    <main className=" bg-fondo ">
      <div className='flex flex-col justify-start  gap-6  md:flex-row-reverse  mx-6 lg:mx-16 py-6  '>
        <section>
          <CallSidebar onOpen={() => setIsSidebarOpen(true)} />
        </section>

        <aside className={`
                    fixed inset-y-0 right-0 z-50 w-[25rem]  bg-fondo p-4 shadow-2xl overflow-y-auto
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full '}
                    md:translate-x-0 md:static md:w-auto
                `}>
                    {/* Botón de cerrar dentro del sidebar para móviles */}
                    <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="md:hidden"
                    >
                        <ArrowSidebar />
                    </button>

                    {/* Tu componente Profile */}
                    {profile.map((item) => (
              <Profile key={item.id} prof={item} />
          ))}
                </aside>

        <section className='-translate-x-12 '>

          {posts.map((item) => (
            <PostCard key={item.id} post={item} />
          ))}

        </section>
        
      </div>
    </main>
  )
}
