import { useState, useEffect } from "react";

export default function TerminalConsole({ prof = [] }) {

    

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!prof || prof.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % prof.length);
        }, 20000); // 20 segundos

        return () => clearInterval(interval);
    }, [prof.length]);

    const activeLogs = [
        prof[(currentIndex + 1) % prof.length]
    ].filter(Boolean)

    // Evitar errores si array esta vacío
    if (!prof || prof.length  < 1) {
        return <p className="text-white/70">No hay registros disponibles</p>
    }

    const currentLog = prof[currentIndex];
    const { problem, title, timestamps, solution, typeSolution } = currentLog;

    let lineCounter = 1;



    return (
        <section >
            <div className="flex  justify-center " >
                <div className="  w-[22rem] text-sm md:text-xs md:w-[14rem]  lg:min-w-sm lg:max-w-2xl   xl:max-w-[96rem] xl:min-w-xl xl:text-lg font-fontConsole font-black  bg-containConsole pt-2 pb-2 rounded-3xl">

                    {/* ==== CONTENEDOR 3 PUNTOS === */}
                    <div className="flex flex-row mx-6 mb-2  gap-1 ">
                        <div className="w-6 h-6 xl:w-8 xl:h-8 bg-consoleRed rounded-full  "></div>
                        <div className="w-6 h-6 xl:w-8 xl:h-8 bg-consoleYellow rounded-full  "></div>
                        <div className="w-6 h-6 xl:w-8 xl:h-8 bg-consoleGreen rounded-full  "></div>
                    </div>

                    {/* ==== CONTENEDOR TEXTO === */}
                    <div className="p-3  xl:p-6 mx-0.5 rounded-3xl uppercase bg-fondo ">
                        <h1 className="text-white/80  xl:text-md">REGISTROS DE RESOLUCIÓN DE PROBLEMAS</h1>

                        <div className=" my-4  whitespace-normal ">
                            <h2 className=" mb-2  text-fontProblem ">[ {problem} ] :  </h2>
                            <p className="  text-fontConsole " >  {title} </p>
                        </div>


                        <div className=" my-4  whitespace-normal ">
                            <h2 className="mb-2 text-fontSolution ">[ {solution} ] : </h2>
                            <p className="mb-1 text-fontConsole ">{typeSolution} </p>
                            <p className="text-fontTimestamp"> {timestamps} </p>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}