import { Location, Phone, Emails, Options } from "./ProfileIcons";

export default function Profile( {prof} ){
    if(!prof) return null;

    const studiesList = [
        {
            img: prof.studies.technologist,
            alt: "Logo Sena",
            spinnerColor: "stroke-green-500"
        },
        {
            img: prof.studies.bootcam,
            alt: "Logo Talento Tech",
            spinnerColor: "stroke-purple-500"
        }
    ];
    
    return(
        <article className="w-full max-w-4xl mx-auto p-4 sm:p-6 my-2  bg-[var(--color-tarjet)] border border-white/80 rounded-2xl     text-white transition-all duration-300">
            <div className="border  border-white/60 -mx-4 md:-mx-5 lg:-mx-6  translate-y-18    "></div>
            <header className="flex md:justify-between items-center mt-12 mb-6">
                <img 
                src={prof.avatar}
                alt="Logo sena"
                className="-ml-8 lg:ml-8 size-14  lg:size-20 purple-600/70 p-1  rounded-full ring-2 ring-white translate-x-8 "
                />
                <div className="flex  items-center  gap-4 mt-6 lg:mt-4">
                    <h6 className="px-3 py-0.5  text-xs font-medium lg:font-bold lg:text-lg  text-white/90 bg-mist-700/60  rounded-full border  ">Seguir</h6>
                        
                    <Options/>
                    
                </div>
            </header>

            <section>
                <div>
                    <h2 className="font-bold text-xl my-2">{prof.name}</h2>
                    <p className="text-md lg:text-lg leading-normal mb-4">{prof.description} </p>
                    <div className=" flex flex-wrap  text-sm items-center  md:gap-02  mb-4">
                    <Location/>
                    <h4 className="mr-4 ml-2 md:mr-6 ">{prof.location} </h4>
                    <Emails/>
                    <h4 className="mr-4 ml-2 md:mr-6 ">{prof.gmail} </h4>
                    <Phone/>
                    <h4 className="mr-4 ml-2 md:mr-6 ">{prof.phone} </h4>
                    </div>
                </div>
                    
                <div className="flex flex-row gap-4 items-center flex-wrap">
                    <h4 className="font-medium md:text-lg md:font-bold ">Estudios |</h4>
                    {studiesList.map((study,index)=>(
                        <div key={index} className="relative size-12 lg:size-18 rounded-full ">
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
                            className={study.spinnerColor}

                            strokeDasharray="120 10 120"
                            ></circle>
                        </svg>
                        <img 
                        className={`rounded-full size-full object-cover relative z-10`}
                        src={study.img}
                        alt={study.alt} />
                    </div>
                    ))}
                </div>

            </section>

            <footer>
                <div>
                    <div></div>
                    <div>
                        
                    </div>
                </div>

            </footer>
        </article>
    )
}