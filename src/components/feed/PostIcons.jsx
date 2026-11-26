import { useState } from "react";
import { LuBookmark, LuCheck, LuHeart, LuMessageCircle, LuRepeat2, LuShare } from "react-icons/lu";

const particles = [
    [-43, -34], [-27, -59], [-8, -48], [13, -68],
    [33, -51], [49, -30], [-48, -9], [39, -13],
];
const action = "inline-flex min-h-11 min-w-8 items-center justify-center gap-1.5 rounded-full px-1.5 text-sm transition-colors hover:bg-purple-300/10 focus-visible:outline-2 focus-visible:outline-purple-200";

function usePostFlag(postId, name) {
    const key = `portfolio:${postId}:${name}`;
    const [active, setActive] = useState(() => {
        try { return localStorage.getItem(key) === "1"; } catch { return false; }
    });

    function toggle() {
        const next = !active;
        setActive(next);
        try { localStorage.setItem(key, next ? "1" : "0"); } catch { /* State stays available on this page. */ }
        return next;
    }

    return [active, toggle];
}

export default function PostIcons({ postId, metrics = {} }) {
    const [liked, toggleLike] = usePostFlag(postId, "liked");
    const [saved, toggleSave] = usePostFlag(postId, "saved");
    const [burst, setBurst] = useState(0);
    const [shareStatus, setShareStatus] = useState("");

    async function sharePost() {
        const url = new URL(window.location.href);
        url.hash = postId;
        try {
            if (navigator.share) {
                await navigator.share({ url: url.href });
            } else {
                await navigator.clipboard.writeText(url.href);
                setShareStatus("Enlace copiado");
            }
        } catch (error) {
            if (error.name !== "AbortError") setShareStatus("No se pudo compartir el enlace");
        }
    }

    return (
        <footer className="flex flex-wrap items-center justify-between gap-2 pt-4 pb-2 text-purple-300/80">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <span className="inline-flex min-h-11 items-center gap-1.5 text-sm">
                    <LuMessageCircle className="size-7" aria-hidden="true" />{metrics.comments ?? 0}<span className="sr-only"> comentarios</span>
                </span>
                <span className="inline-flex min-h-11 items-center gap-1.5 text-sm">
                    <LuRepeat2 className="size-7" aria-hidden="true" />{metrics.reposts ?? 0}<span className="sr-only"> republicaciones</span>
                </span>
                <button type="button" className={`${action} relative hover:text-rose-300 ${liked ? "text-rose-300" : ""}`}
                    aria-label="Me gusta" aria-pressed={liked} onClick={() => {
                        if (toggleLike()) setBurst((previous) => previous + 1);
                    }}>
                    <LuHeart className={`size-7 fill-current ${liked ? "text-rose-300" : "text-red-400"}`} aria-hidden="true" />
                    {(metrics.likes ?? 0) + Number(liked)}
                    {liked && burst > 0 && (
                        <span key={burst} aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 z-10 hidden motion-safe:block">
                            {particles.map(([x, y], index) => (
                                <LuHeart key={x} className="absolute -top-2 -left-2 size-4 animate-heart-particle fill-current opacity-0"
                                    style={{ "--heart-x": `${x}px`, "--heart-y": `${y}px`, animationDelay: `${index * 14}ms` }}
                                    onAnimationEnd={index === particles.length - 1 ? () => setBurst(0) : undefined} />
                            ))}
                        </span>
                    )}
                </button>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
                <button type="button" className={`${action} ${saved ? "text-violet-200" : ""}`} aria-label="Guardar"
                    aria-pressed={saved} onClick={toggleSave}>
                    <LuBookmark className={`size-7 ${saved ? "fill-current" : ""}`} aria-hidden="true" />
                </button>
                <button type="button" className={action} aria-label="Compartir publicación" title={shareStatus || "Compartir publicación"} onClick={sharePost}>
                    {shareStatus === "Enlace copiado" ? <LuCheck className="size-7" aria-hidden="true" /> : <LuShare className="size-7" aria-hidden="true" />}
                </button>
            </div>
            <span className="sr-only" role="status">{shareStatus}</span>
        </footer>
    );
}
