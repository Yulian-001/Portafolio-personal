import PostIcons from "./PostIcons"


export default function  PostCard ({ post }) {
    if(!post) return null;

    return (
        <article className="flex flex-col w-full max-w-3xl mx-auto  pr-3 ml-12  p-2 my-3 bg-[var(--color-tarjet)] border border-white/80  rounded-2xl shadow-2xl text-white  transition-all duration-300l ">  
            
            <header className="flex items-center gap-3 pb-4 mx-3 " >
                <img 
                src={post.author.avatar} 
                alt={ post.author.name }
                className="size-14 rounded-full object-cover ring-2 ring-purple-600/70"
                />
                <div className="flex flex-col">
                    <h3 className="font-bold text-sm sm:text-base text-purple-100">{ post.author.name }</h3>
                    <span className="text-xs text-purple-300/70">{ post.author.handle }</span>
                </div>
                <time className="ml-auto text-sm text-purple-200/70" dateTime= { post.createdAt }> { post.createdAt }</time>
            </header>

            <section >
                <p className=" text-xl sm:text-base ml-12 md:text-xl -translate-y-2 lg:ml-14 lg:-translate-y-6 pl-4  text-gray-200 leading-tight" >{ post.content}</p>
                {post.media && post.media.length > 0 && (
                    <ul className="flex flex-wrap  justify-center  ml-4 md:ml-8   gap-2">
                        {post.media.map((item)=>(
                            <li key={item.id}>
                                <img 
                                src={item.icon}
                                alt={item.name}
                                className="  size-18  md:size-20 lg:size-30 mx-1 object-contain transition-transform duration-300 ease-in-out hover:scale-110  cursor-pointer rounded-2xl "
                            />
                            </li>
                        ))}
                    </ul>
                )}
                    {post.projects && post.projects.length > 0 &&(
                    <ul className="space-y-3 pt-2 ml-13" >
                        {post.projects.map((item)=> (
                            <li key={item.id} className="p-3">
                                <ol>
                                    <h4 className="pb-3 text-xl font-medium" >{item.name}</h4> 
                                    <p className="mb-3">{item.description}</p> 
                                    <a className="mx-3 font-mono text-xl text-blue-600 hover:text-purple-300 underline" 
                                    href={item.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                        Ver Github 
                                    </a>   
                                </ol>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            
            <PostIcons metrics={post.metrics}/>
        </article>
    )
}


