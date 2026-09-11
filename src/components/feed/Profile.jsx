import ProfileIcons from "./ProfileIcons";

export default function Profile( {prof} ){
    if(!prof) return null;
    
    return(
        <article className="flex w-full max-w-4xl mx-auto p-4 sm:p-6 my-4 bg-[var(--color-tarjet)] border border-white/50 rounded-2xl shadow-2xl text-white transition-all duration-300">
            <header>
                <img 
                src={prof.avatar}
                alt="Logo sena"
                className="size-20 purple-600/70 p-1 rounded-full ring-2 ring-white"
                />
                <h3 className=" text-xl text-white/90 bg-mist-700/60 px-3 py-0.5 rounded-2xl border-2 ">Seguir</h3>
                <ProfileIcons/>
            </header>

            <section>
                <div>
                <h2>{prof.name}</h2>
                <p>{prof.description} </p>
                <h4>{prof.location} </h4>
                <h4>{prof.gmail} </h4>
                <h4>{prof.phone} </h4>
                </div>
                <div className="flex flex-line gap-4 justify-start align-center">
                    <h4>Estudios</h4>
                    <img src={prof.studies.technologist}
                    alt="Logo Sena" 
                    className="size-10 rounded-full  ring-4 ring-green-300 "
                    />
                    <img src={prof.studies.bootcam} 
                    alt="Logo Talento Techo"
                    className="size-10 rounded-full ring-4 ring-pink-700/90"
                    />
                </div>
            </section>

            <footer>

            </footer>
        </article>
    )
}