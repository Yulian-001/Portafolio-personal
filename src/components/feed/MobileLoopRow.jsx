import { useState } from "react";

const movingList = "flex flex-wrap justify-center gap-3 px-1 py-3 motion-safe:min-w-[100cqw] motion-safe:shrink-0 motion-safe:flex-nowrap motion-safe:justify-around";

export default function MobileLoopRow({ items, renderItem, direction }) {
    const [selected, setSelected] = useState(null);
    if (!items.length) return null;

    const animation = direction === "right" ? "motion-safe:animate-mobile-loop-reverse" : "motion-safe:animate-mobile-loop";

    function renderList(copy) {
        return (
            <ul aria-hidden={copy || undefined} className={`${movingList} ${copy ? "hidden motion-safe:flex" : ""}`}>
                {items.map((item) => (
                    <li key={item.id} className="shrink-0">
                        <button type="button" aria-pressed={selected === item.id} tabIndex={copy ? -1 : undefined}
                            onMouseDown={copy ? (event) => event.preventDefault() : undefined}
                            onClick={() => setSelected((current) => current === item.id ? null : item.id)}
                            className="flex cursor-pointer rounded-xl p-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-amber-200 aria-pressed:bg-amber-200/10 aria-pressed:ring-2 aria-pressed:ring-amber-200 aria-pressed:shadow-[0_0_14px_#f9c85a]">
                            {renderItem(item)}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="[container-type:inline-size] motion-safe:overflow-hidden">
            <div className={`motion-safe:flex motion-safe:w-max ${animation} ${selected ? "[animation-play-state:paused]!" : ""}`}>
                {renderList(false)}
                {renderList(true)}
            </div>
        </div>
    );
}
