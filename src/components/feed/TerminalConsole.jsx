import { useState, useEffect } from "react";

export default function TerminalConsole({ prof = [] }) {

    

    const [currentIndex, setCurrentIndex] = useState(0);
    const logCount = prof?.length ?? 0;

    useEffect(() => {
        if (logCount <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % logCount);
        }, 20000); // 20 segundos

        return () => clearInterval(interval);
    }, [logCount]);

    // Evitar errores si array esta vacío
    if (!logCount) {
        return <p className="text-white/70">No hay registros disponibles</p>
    }

    const currentLog = prof[currentIndex % logCount];
    const { problem, title, timestamps, solution, typeSolution } = currentLog;



    return (
        <section >
            <div className="flex  justify-center " >
                <div className="w-full min-w-0 text-sm font-fontConsole font-black bg-containConsole py-2 rounded-3xl">

                    {/* ==== CONTENEDOR 3 PUNTOS === */}
                    <div className="flex flex-row mx-6 mb-2  gap-1 ">
                        <div className="w-6 h-6 xl:w-8 xl:h-8 bg-consoleRed rounded-full  "></div>
                        <div className="w-6 h-6 xl:w-8 xl:h-8 bg-consoleYellow rounded-full  "></div>
                        <div className="w-6 h-6 xl:w-8 xl:h-8 bg-consoleGreen rounded-full  "></div>
                    </div>

                    {/* ==== CONTENEDOR TEXTO === */}
                    <div className="p-3  xl:p-6 mx-0.5 rounded-3xl uppercase bg-fondo ">
                        <h3 className="text-white/90">REGISTROS DE RESOLUCIÓN DE PROBLEMAS</h3>

                        <div className=" my-4  whitespace-normal ">
                            <h4 className="mb-2 text-rose-300">[ {problem} ]</h4>
                            <p className="text-white/85">{title}</p>
                        </div>


                        <div className=" my-4  whitespace-normal ">
                            <h4 className="mb-2 text-green-300">[ {solution} ]</h4>
                            <p className="mb-1 text-white/85">{typeSolution}</p>
                            <p className="text-fontTimestamp"> {timestamps} </p>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}
