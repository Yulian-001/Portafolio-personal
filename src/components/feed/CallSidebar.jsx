import { LuChevronRight } from "react-icons/lu";
import { Whatsapp } from "./ProfileIcons";

export default function CallSidebar({ onOpen, buttonRef, expanded, prof }) {
    const whatsappUrl = `https://wa.me/${prof.phone.replace(/\D/g, "")}?text=${encodeURIComponent(prof.whatsappMessage ?? "")}`;

    return (
        <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center border-b border-purple-200/25 bg-fondo text-white desktop:hidden">
            <div className="mx-auto flex w-full max-w-[820px] items-center justify-between gap-3 px-3 sm:px-5">
                <button ref={buttonRef} type="button" aria-label="Abrir perfil y habilidades"
                    aria-controls="portfolio-profile" aria-expanded={expanded} onClick={onOpen}
                    className="group flex min-h-11 items-center gap-2 rounded-full border border-purple-300/35 bg-tarjet py-1 pr-3 pl-1 text-sm font-semibold shadow-[0_0_12px_#c084fc24] transition-colors hover:border-purple-200 focus-visible:outline-2 focus-visible:outline-purple-200">
                    <img className="size-8 rounded-full object-cover" src={prof.avatar} alt="" />
                    Ver perfil
                    <LuChevronRight aria-hidden="true" className="size-4 text-purple-200 motion-safe:animate-profile-nudge" />
                </button>
                {prof.welcome && <p className="hidden text-center text-sm font-medium text-purple-100 sm:block">{prof.welcome}</p>}
                <a aria-label="Chat directo a WhatsApp" href={whatsappUrl} rel="noopener noreferrer" target="_blank"
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-green-300/60 bg-green-800 text-white shadow-[0_0_12px_#4ade8050] transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-green-200 motion-safe:animate-whatsapp-beat">
                    <Whatsapp />
                </a>
            </div>
        </header>
    );
}
