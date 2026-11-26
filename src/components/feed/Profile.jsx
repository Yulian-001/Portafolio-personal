import { useId, useLayoutEffect, useRef, useState } from "react";
import { LuRotateCcw, LuZap } from "react-icons/lu";
import { Location, Phone, Emails, Options } from "./ProfileIcons";
import TerminalConsole from "./TerminalConsole.jsx";
import CardSkill from "./CardSkill";
import ProfileStudies from "./ProfileStudies";

const skillButtonStyle = `
    relative isolate inline-grid shrink-0 cursor-pointer place-items-center rounded-full
    border border-[#eeba54] bg-[radial-gradient(circle_at_38%_26%,#524016,#261436_65%)] text-[#ffe99d]
    shadow-[0_0_9px_#e6a52e66,inset_0_0_8px_#eebc3a42]
    hover:shadow-[0_0_19px_#fabe4fbb,inset_0_0_11px_#edc25878]
    focus-visible:outline-2 focus-visible:outline-offset-5 focus-visible:outline-[#ffde7e]
    before:pointer-events-none before:absolute before:-inset-1 before:rounded-full before:border-2
    before:border-[#ba812a] before:border-t-[#fff0ad] before:border-r-[#ffc653] before:border-b-transparent
    motion-safe:before:animate-[spin_5s_linear_infinite]
    [&>svg]:size-[22px] [&>svg]:drop-shadow-[0_0_5px_#f1a92b]
`;

export default function Profile({ prof, skills }) {
    const [showSkills, setShowSkills] = useState(false);
    const id = useId();
    const skillButton = useRef(null);
    const returnButton = useRef(null);
    const moveFocus = useRef(false);
    const emailLink = `mailto:${prof.gmail}`;
    const phoneLink = `tel:${prof.phone.replace(/[^+\d]/g, "")}`;

    useLayoutEffect(() => {
        if (!moveFocus.current) return;
        (showSkills ? returnButton : skillButton).current?.focus({ preventScroll: true });
        moveFocus.current = false;
    }, [showSkills]);

    function flipProfile() {
        moveFocus.current = true;
        setShowSkills((visible) => !visible);
    }

    return (
        <div className="profile-flip">
            <div className={`profile-rotor ${showSkills ? "is-flipped" : ""}`}>
                <div className="profile-face" inert={showSkills}>
                    <article id={`${id}-profile`} className="rounded-2xl border border-white/50 bg-tarjet text-white">
                        <header className="relative px-4 pt-9 pb-4 sm:px-6">
                            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-16 rounded-t-2xl border-b border-white/30 bg-linear-to-r from-nav via-purple-950 to-fondo" />
                            <div className="relative mb-4 flex flex-wrap items-end gap-2.5 sm:gap-4">
                                <img src={prof.avatar} alt="" className="size-16 rounded-full object-cover ring-2 ring-white sm:size-20" />
                                <div className="ml-auto flex items-center gap-2">
                                    <button ref={skillButton} type="button" aria-expanded={showSkills}
                                        className={`${skillButtonStyle} size-12 after:pointer-events-none after:absolute after:-inset-1 after:rounded-full after:border after:border-amber-200 after:opacity-0 after:shadow-[0_0_18px_5px_#ffc95b] motion-safe:after:animate-skill-glow`}
                                        aria-controls={id} aria-label={skills.controls.show} title={skills.controls.show}
                                        onClick={flipProfile}>
                                        <LuZap aria-hidden="true" />
                                    </button>
                                    {prof.github && (
                                        <a className="profile-follow" href={prof.github} aria-label="Seguir en GitHub">Seguir</a>
                                    )}
                                    <Options emailLink={emailLink} phoneLink={phoneLink} />
                                </div>
                            </div>
                            {prof.welcome && <p className="mb-1 text-sm font-semibold text-purple-200">{prof.welcome}</p>}
                            <h2 className="text-xl font-bold sm:text-2xl">{prof.name}</h2>
                        </header>
                        <section className="space-y-5 px-4 pb-6 sm:px-6">
                            <p className="leading-relaxed text-white/90 sm:text-lg">{prof.description}</p>
                            <ul className="space-y-2 text-base text-white/85">
                                <li className="flex items-center gap-2"><Location /> {prof.location}</li>
                                <li className="flex items-center gap-2"><Emails /> <a className="break-all hover:underline" href={emailLink}>{prof.gmail}</a></li>
                                <li className="flex items-center gap-2"><Phone /> <a className="hover:underline" href={phoneLink}>{prof.phone.trim()}</a></li>
                            </ul>
                            <ProfileStudies studies={prof.studies} />
                            <TerminalConsole prof={prof.terminalLogs} />
                        </section>
                    </article>
                </div>
                <div id={id} className="profile-face profile-face-back" inert={!showSkills}>
                    <CardSkill skills={skills} name={prof.name} returnControl={
                        <button ref={returnButton} type="button" className={`${skillButtonStyle} ms-auto size-11`}
                            aria-controls={`${id}-profile`} aria-label={skills.controls.hide} title={skills.controls.hide}
                            onClick={flipProfile}>
                            <LuRotateCcw aria-hidden="true" />
                        </button>
                    } />
                </div>
            </div>
        </div>
    );
}
