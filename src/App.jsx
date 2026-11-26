import { useEffect, useRef, useState } from "react";
import posts from "./data/posts.json";
import profile from "./data/profile.json";
import skills from "./data/skill.json";
import PostCard from "./components/feed/PostCard";
import Profile from "./components/feed/Profile";
import CallSidebar from "./components/feed/CallSidebar";
import { LuX } from "react-icons/lu";

export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const openButton = useRef(null);
    const closeButton = useRef(null);

    useEffect(() => {
        if (isSidebarOpen) {
            closeButton.current?.focus();
        }
    }, [isSidebarOpen]);

    function closeSidebar() {
        setIsSidebarOpen(false);
        openButton.current?.focus();
    }

    return (
        <main className="min-h-screen bg-fondo">
            <CallSidebar onOpen={() => setIsSidebarOpen(true)} buttonRef={openButton} expanded={isSidebarOpen} prof={profile[0]} />
            <div className="portfolio-layout">
                <aside id="portfolio-profile" className={`portfolio-sidebar ${isSidebarOpen ? "is-open" : ""}`}
                    onKeyDown={(event) => {
                        if (event.key === "Escape" && isSidebarOpen) closeSidebar();
                    }}>
                    <button ref={closeButton} type="button" onClick={closeSidebar}
                        className="mb-3 flex min-h-11 items-center gap-2 text-white desktop:hidden">
                        <LuX aria-hidden="true" /> Cerrar perfil
                    </button>
                    {profile.map((item) => <Profile key={item.id} prof={item} skills={skills} />)}
                </aside>
                <section aria-label="Publicaciones" className="portfolio-feed min-w-0">
                    {posts.map((item) => <PostCard key={item.id} post={item} />)}
                </section>
            </div>
        </main>
    );
}
