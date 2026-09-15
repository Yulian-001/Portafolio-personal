import PostIcons from "./PostIcons"


export default function PostCard({ post }) {
    if (!post) return null;

    return (
        <article className="flex flex-col w-full max-w-3xl mx-auto  pr-3 ml-12  p-2 my-3 bg-[var(--color-tarjet)] border border-white/80  rounded-2xl shadow-2xl text-white  transition-all duration-300l ">

            <header className="flex items-center gap-3 pb-4 mx-3 " >
                <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="size-14 rounded-full object-cover ring-2 ring-purple-600/70"
                />
                <div className="flex flex-col">
                    <h3 className="font-bold text-sm sm:text-base text-purple-100">{post.author.name}</h3>
                    <span className="text-xs text-purple-300/70">{post.author.handle}</span>
                </div>
                <time className="ml-auto text-sm text-purple-200/70" dateTime={post.createdAt}> {post.createdAt}</time>
            </header>

            <section >
                <p className=" text-xl sm:text-base ml-12 md:text-xl -translate-y-2 lg:ml-14 lg:-translate-y-6 pl-4  text-gray-200 leading-tight" >{post.content}</p>
                {post.media && post.media.length > 0 && (
                    <ul className="flex flex-wrap  justify-center  ml-4 md:ml-8   gap-2">

                        <style>{`
                        @keyframes travelStroke {
                            from { stroke-dashoffset: 392 ; }
                            to { stroke-dashoffset: 10; }
                        }
                        .animate-travel {
                            animation: travelStroke 2s linear infinite;
                        }
                        `}</style>

                        {post.media.map((item, index) => {
                            const spinnerColors = [
                                "stroke-yellow-400",
                                "stroke-cyan-400",
                                "stroke-green-600",
                                "stroke-purple-400",
                                "stroke-orange-400",
                                "stroke-blue-900",
                                "stroke-white",
                                "stroke-green-900",
                                "stroke-white"
                            ];
                            const assignedColor = spinnerColors[index % spinnerColors.length];
                            const isLastItem = index === post.media.length - 1;
                            return (
                                <li key={item.id} className="relative group cursor-pointer p-2 size-22   sm:-p-2 md:size-32 m-1" >

                                    <svg className={`absolute  -inset-1.5 size-[calc(100%+12px)]   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                                        viewBox="0 0 100 100"
                                    >
                                        {isLastItem && (
                                            <defs>
                                                <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#ff4b4b" />   {/* Rojo */}
                                                    <stop offset="20%" stopColor="#ff9f43" />  {/* Naranja */}
                                                    <stop offset="40%" stopColor="#feca57" />  {/* Amarillo */}
                                                    <stop offset="60%" stopColor="#1dd1a1" />  {/* Verde */}
                                                    <stop offset="80%" stopColor="#54a0ff" />  {/* Azul */}
                                                    <stop offset="100%" stopColor="#5f27cd" /> {/* Morado */}
                                                </linearGradient>
                                            </defs>
                                        )}
                                        <rect
                                            x="5"
                                            y="5"
                                            width="90"
                                            height="90"
                                            rx="18"
                                            fill="none"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            stroke="url(#rainbow-gradient)"
                                            className={`${!isLastItem ? assignedColor : ""} animate-travel`}
                                            strokeDasharray="220  10"
                                        />
                                    </svg>

                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="  size-full object-contain  rounded-3xl relative z-10 "
                                    />
                                </li>
                            );
                        })}
                    </ul>
                )}
                {post.projects && post.projects.length > 0 && (
                    <ul className="space-y-3 pt-2 ml-13" >
                        {post.projects.map((item) => (
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

            <PostIcons metrics={post.metrics} />
        </article>
    )
}


