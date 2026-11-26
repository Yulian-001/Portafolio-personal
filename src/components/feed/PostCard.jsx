import { useId } from "react";
import MobileLoopRow from "./MobileLoopRow";
import PostIcons from "./PostIcons";

const hoverColors = ["stroke-yellow-400", "stroke-cyan-400", "stroke-sky-400", "stroke-purple-400", "stroke-orange-400", "stroke-blue-400"];
const projectButton = "inline-flex rounded-lg bg-blue-100 px-3 py-1.5 font-semibold text-blue-950 hover:bg-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200";

function Logo({ item, index = 0 }) {
    const gradientId = useId();
    const rainbow = item.accent === "rainbow";

    return (
        <span className="group/logo relative grid size-24 place-items-center rounded-2xl p-2 sm:size-28 md:size-32 md:motion-safe:hover:animate-bounce">
            <svg aria-hidden="true" viewBox="0 0 100 100"
                className={`pointer-events-none absolute -inset-1 size-[calc(100%+8px)] transition-opacity ${rainbow ? "opacity-100" : "hidden opacity-0 md:block md:group-hover/logo:opacity-100"}`}>
                {rainbow && (
                    <defs><linearGradient id={gradientId}>
                        <stop offset="0%" stopColor="#ff526a" /><stop offset="25%" stopColor="#ffcf52" />
                        <stop offset="38%" stopColor="#f9f871" /><stop offset="55%" stopColor="#5ef5a4" />
                        <stop offset="72%" stopColor="#4ed8ff" /><stop offset="86%" stopColor="#9c76ff" />
                        <stop offset="100%" stopColor="#e275ff" />
                    </linearGradient></defs>
                )}
                <rect x="4" y="4" width="92" height="92" rx="16" fill="none" strokeWidth="3" strokeDasharray="75 15"
                    stroke={rainbow ? `url(#${gradientId})` : undefined}
                    className={`${rainbow ? "" : hoverColors[index % hoverColors.length]} motion-safe:group-hover/logo:animate-logo-travel`} />
            </svg>
            <img src={item.icon} alt={item.name} loading="lazy" className="relative size-full rounded-2xl object-contain" />
        </span>
    );
}

export default function PostCard({ post }) {
    if (!post) return null;

    const media = post.media ?? [];
    const rowCount = Math.min(3, media.length);
    const rows = Array.from({ length: rowCount }, (_, index) =>
        media.slice(Math.ceil(index * media.length / rowCount), Math.ceil((index + 1) * media.length / rowCount)));

    return (
        <article id={post.id} className="mx-auto mb-4 flex w-full max-w-3xl scroll-mt-20 flex-col rounded-2xl border border-white/60 bg-tarjet p-4 text-white/80 shadow-xl sm:p-5">
            <header className="flex flex-wrap items-center gap-3 pb-4">
                <img src={post.author.avatar} alt="" className="size-12 shrink-0 rounded-full object-cover ring-2 ring-purple-600/70" />
                <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-white/90 sm:text-base">{post.author.name}</h3>
                    {post.author.handle && <span className="text-xs text-purple-300/80">{post.author.handle}</span>}
                </div>
                <span className="ml-auto text-sm text-purple-200/80">{post.createdAt}</span>
            </header>
            <section>
                <p className="whitespace-pre-wrap text-base leading-relaxed text-white/90 [overflow-wrap:anywhere]">{post.content}</p>
                {rows.length > 0 && (
                    <>
                        <ul className="mt-3 hidden flex-wrap justify-center gap-3 md:flex">
                            {media.map((item, index) => <li key={item.id}><Logo item={item} index={index} /></li>)}
                        </ul>
                        <div className="mt-3 md:hidden">
                            {rows.map((row, index) => (
                                <MobileLoopRow key={row[0].id} items={row} renderItem={(item) => <Logo item={item} />}
                                    direction={index % 2 === 0 ? "right" : "left"} />
                            ))}
                        </div>
                    </>
                )}
                {!!post.projects?.length && (
                    <ul className="space-y-3 pt-2">
                        {post.projects.map(({ id, name, description, githubUrl, link }) => (
                            <li key={id} className="p-3">
                                <h4 className="pb-3 text-xl font-medium">{name}</h4>
                                <p className="mb-3 text-lg">{description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {githubUrl?.trim() && <a href={githubUrl.trim()} target="_blank" rel="noreferrer" className={projectButton}>Ver GitHub</a>}
                                    {link?.trim() && <a href={link.trim()} target="_blank" rel="noreferrer" className={projectButton}>Ver proyecto</a>}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
            <PostIcons postId={post.id} metrics={post.metrics} />
        </article>
    );
}
