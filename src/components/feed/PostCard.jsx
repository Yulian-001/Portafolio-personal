import PostFooter from "./PostFooter"


export default function  PostCard ({ post }) {
    if(!post) return null;

    return (
        <article className='post-card'>
            <header className="flex flex-line gap-3">
                <img 
                src={post.author.avatar} 
                alt={ post.author.name }
                className="size-10 rounded-3xl "
                />
                <div className="container-information">
                    <h3>{ post.author.name }</h3>
                    <span>{ post.author.handle }</span>
                </div>
                <time dateTime= { post.createdAt }> { post.createdAt }</time>
            </header>

            <section>
                <p>{ post.content}</p>
                {post.media && post.media.length > 0 && (
                    <ul className="flex flex-wrap gap-3 my3 p-0 list-none">
                        {post.media.map((item)=>(
                            <li key={item.id}>
                                <img 
                                src={item.icon}
                                alt={item.name}
                                className="size-30"/>
                            </li>
                        ))}
                    </ul>
                )}
                    {post.projects && post.projects.length > 0 &&(
                    <ul>
                        {post.projects.map((item)=> (
                            <li key={item.id}>
                                <ol>
                                    <h4>{item.name}</h4> 
                                    <p>{item.description}</p> 
                                    <a href={item.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="github-link"
                                    >
                                        Ver Github 
                                    </a>   
                                </ol>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            
            <PostFooter metrics={post.metrics}/>
        </article>
    )
}


