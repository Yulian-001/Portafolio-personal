import { useId, useRef, useState } from "react";
import { LuX } from "react-icons/lu";

export default function ProfileStudies({ studies }) {
    const id = useId();
    const dialog = useRef(null);
    const [study, setStudy] = useState(null);

    function openStudy(event, item) {
        const desktopHover = window.matchMedia("(min-width: 48rem) and (hover: hover) and (pointer: fine)").matches;
        if (desktopHover && event.detail !== 0) return;
        setStudy(item);
        dialog.current.showModal();
    }

    return (
        <section>
            <h3 className="mb-3 font-semibold">Estudios</h3>
            <div className="flex flex-wrap gap-4">
                {studies.map((item, index) => (
                    <div className="group/study relative" key={item.src}>
                        <button type="button" aria-label={item.title} aria-haspopup="dialog"
                            aria-describedby={`${id}-study-${index}`} onClick={(event) => openStudy(event, item)}
                            className="peer relative block size-12 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200">
                            <svg aria-hidden="true" className="pointer-events-none absolute -inset-1 size-[calc(100%+8px)] motion-safe:animate-spin" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="44" fill="none" strokeWidth="6" strokeLinecap="round"
                                    className={item.spinnerColor} strokeDasharray="120 10 120" />
                            </svg>
                            <img className="size-full rounded-full object-cover" src={item.src} alt="" />
                        </button>
                        <div id={`${id}-study-${index}`} role="tooltip"
                            className="absolute top-full left-0 z-30 hidden w-[min(25rem,65vw)] pt-3 md:group-hover/study:block md:peer-focus-visible:block">
                            <div className="rounded-xl border border-purple-200/30 bg-fondo p-4 text-sm shadow-2xl">
                                <h4 className="mb-1 font-bold">{item.title}</h4>
                                <p className="leading-relaxed text-purple-50/90">{item.info}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <dialog ref={dialog} aria-labelledby={`${id}-title`}
                onClick={(event) => {
                    if (event.target === event.currentTarget) dialog.current.close();
                }}
                className="fixed inset-0 m-auto w-[min(28rem,calc(100%-2rem))] max-h-[85dvh] overflow-y-auto rounded-2xl border border-purple-200/35 bg-fondo text-white shadow-2xl backdrop:bg-black/60">
                <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-3">
                        <h4 id={`${id}-title`} className="text-lg font-bold">{study?.title}</h4>
                        <button type="button" aria-label="Cerrar información de estudios" onClick={() => dialog.current.close()}
                            className="-mt-2 -mr-2 grid size-11 shrink-0 place-items-center rounded-full focus-visible:outline-2">
                            <LuX aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                    <p className="text-sm leading-relaxed text-purple-50/90">{study?.info}</p>
                </div>
            </dialog>
        </section>
    );
}
