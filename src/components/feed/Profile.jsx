import { Location, Phone, Emails, Options } from "./ProfileIcons";
import { useState } from "react";
import TerminalConsole from "../TerminalConsole";

export default function Profile({ prof }) {
    if (!prof) return null;

    const [selectStudie, setSelectStudie] = useState(null);

    return (
        <article className="w-full max-w-4xl mx-auto p-4 sm:p-6 my-2  bg-tarjet border border-white/80 rounded-2xl     text-white transition-all duration-300">
            <div className="border  border-white/60 -mx-4 md:-mx-5 lg:-mx-6   md:mt-8 translate-y-20    "></div>
            <header className="flex justify-between items-center mt-12  mb-6">
                <img
                    src={prof.avatar}
                    alt="Logo sena"
                    className="-ml-8 lg:ml-8 size-14  lg:size-20 purple-600/70 p-1  rounded-full ring-2 ring-white translate-x-8 "
                />
                <div className="flex  items-center  gap-4 mt-8 lg:mt-8">
                    <h6 className="px-3 py-0.5  text-xs font-medium lg:font-bold lg:text-lg  text-white/90 bg-mist-700/60  rounded-full border  ">Seguir</h6>

                    <Options />

                </div>
            </header>

            <section>
                <div>
                    <h2 className="font-bold text-xl my-2">{prof.name}</h2>
                    <p className="text-md lg:text-lg leading-normal mb-4">{prof.description} </p>
                    <div className=" flex flex-col lg:flex-row  text-sm items-start lg:items-center  md:gap-02  mb-4">
                        <div className="flex flex-row items-center">
                            <Location />
                            <h4 className="mr-4 ml-2 md:mr-6 ">{prof.location} </h4>
                        </div>
                        <div className="flex flex-row items-center">
                            <Emails />
                            <h4 className="mr-4 ml-2 md:mr-6 ">{prof.gmail} </h4>
                        </div>
                        <div className="flex flex-row items-center">
                            <Phone />
                            <h4 className="mr-4 ml-2 md:mr-6 ">{prof.phone} </h4>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 items-center flex-wrap">
                    <h4 className="font-medium md:text-lg md:font-bold ">Estudios |</h4>



                    {prof.studies.map(({ src, alt, info, spinnerColor, title }, index) => {
                        const isActive = selectStudie === index;

                        return (

                            <div
                                onClick={() => setSelectStudie(isActive ? null : index)}
                                className="relative group size-12 lg:size-18 rounded-full "

                                key={index}>
                                {isActive && (
                                    <div className="fixed inset-0 z-20 md:hidden bg-transparent"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectStudie(null);
                                        }}
                                    />
                                )}


                                <div className={`
                                        absolute lg:w-md md:translate-y-22 px-4 py-6 bg-black/95 border border-white/20 text-white text-xs md:text-lg rounded-xl shadow-xl transition-all duration-300 z-30
                                        /* Comportamiento Móvil: Controlado por JS */
                                        w-[280px] -translate-x-1/2 left-1/2 mt-14 
                                        ${isActive
                                        ? 'opacity-100 pointer-events-auto '
                                        : 'hidden lg:block md:opacity-0 md:pointer-events-none'}
                                        /* Comportamiento Desktop: Sigue funcionando con Hover */
                                        md:left-auto xl:-translate-x-3 md:-translate-x-49 md:mt-0 md:group-hover:opacity-100 md:pointer-events-none
                                    `}>
                                    <h3 className=" text-xl flex justify-center pb-3 font-bold">{title} </h3>
                                    <p >{info} </p>

                                </div>

                                <svg className="absolute -inset-1 size-[calc(100%+8px)] animate-spin"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="44"
                                        fill="none"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        className={spinnerColor}
                                        strokeDasharray="120 10 120"
                                    ></circle>
                                </svg>
                                <img
                                    className={`rounded-full size-full object-cover relative z-10`}
                                    src={src}
                                    alt={alt} />
                            </div>
                        )
                    })}
                </div>

                <div className="flex  justify-center mt-12 ">
                    <TerminalConsole prof={prof.terminalLogs} />
                </div>
            </section>


        </article>
    )
}