import { RiMessage2Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { HiSave } from "react-icons/hi";
import { BiRepost } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";


export default function PostFooder({metrics}){
return (
    <footer className="flex items-center justify-between pt-4 pb-2 mx-14  text-purple-300/70">
        <div className="flex items-center gap-6">

            <button className="flex items-center gap-2 transition-colors hover:text-purple-300 group" aria-label="Comentarios">
                <RiMessage2Line size={30}/>
                <span className="text-xs font-medium">
                    {metrics?.comments || 0}
                </span>                
            </button>

            <button className="flex items-center gap-2 transition-colors hover:text-green-400 group" aria-label="Reposts">
                <BiRepost size={30}/>
                <span className="text-xs font-medium">
                    {metrics?.reposts|| 0}
                </span>                
            </button>

            <button className="flex items-center gap-2 transition-colors hover:text-pink-500 group" aria-label="Me gusta">
                <FcLike size={30}/>
                <span className="text-xs font-medium">
                    {metrics?.likes || 0}
                </span>                
            </button>

        </div>
        <div className="flex items-center gap-4">
            <button className="transition-colors hover:text-purple-300 hover:scale-110 duration-200" aria-label="Guardar">
                <HiSave size={30}/>              
            </button>

            <button className="transition-colors hover:text-purple-300 hover:scale-110 duration-200" aria-label="Compartir">
                <FiShare2 size={30}/>              
            </button>
        </div>
    </footer>
)
}
