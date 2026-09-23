import { useState, useEffect } from "react"
import { Whatsapp } from "./ProfileIcons";


export default function CallSidebar({onOpen}) {

        const [visible, setVisible] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const controlNavbar = () =>{
            const currentScrollY = window.scrollY;

            if(Math.abs(currentScrollY - lastScrollY)< 5) return;

            if(currentScrollY > lastScrollY && currentScrollY > 50){
                setVisible(false);
            }else {
                setVisible(true);
            }
            //* Posicion actual
            setLastScrollY(currentScrollY)
        };
        window.addEventListener('scroll',controlNavbar);

        return () => {
            window.removeEventListener('scroll',controlNavbar);
        };
    }, [lastScrollY])

    return(
        <section className={`md:hidden fixed   top-0 left-0  right-0 z-50 h-16 bg-fondo border-b border-white/60 text-white flex items-center  transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
        }`}>

            <div className=" w-full flex flex-row  justify-between items-center  mx-4">
                <button  
                    onClick={onOpen}
                    className="relative focus:outline-none w-14 h-14 flex items-center justify-center"
                >
                <svg 
                        className="absolute inset-0 w-full h-full transform -rotate-90 transition-opacity duration-300 
                        animate-spin opacity-100 
                        "
                        viewBox="0 0 36 36"
                    >
                        <circle
                            cx="18"
                            cy="18"
                            r="17"
                            fill="none"
                            stroke="#f87171" /*  color stroke-red-400 */
                            strokeWidth="2"
                            strokeDasharray="35 5" 
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* IMAGEN DE PERFIL */}
                    <img
                        className="transform -scale-x-100 w-12 h-12 rounded-full object-cover z-10"
                        src="/FotoLuffy.png"
                        alt="Luffy" 
                    />
                </button>

                <div >
                    <h3 className="border-x-2 px-2 rounded-lg  font-light ">Bienvenido a mi portafolio</h3>
                </div>

                    <div className="my-2 animate-latir">
                                <a
                                title="Chat directo a WhatsApp"
                                href="https://wa.me/573144533840?text=¡Hola!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20recibir%20más%20información%20sobre%20tus%20servicios.
"
                                rel="noopener noreferrer" 
                                target="_blank"
                                >
                                <Whatsapp />
                            </a >
                    </div>
            </div>
        </section>
    )
}