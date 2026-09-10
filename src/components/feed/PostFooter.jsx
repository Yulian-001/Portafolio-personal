import { RiMessage2Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { HiSave } from "react-icons/hi";
import { BiRepost } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";

export default function PostFooder({metrics}){
return (
    <footer className="post-footer">
        <div className="actions-left">

            <button className="action-btn" aria-label="Comentarios">
                <RiMessage2Line size={20}/>
                <span>
                    {metrics?.comments || 0}
                </span>                
            </button>

            <button className="action-btn" aria-label="Reposts">
                <BiRepost size={20}/>
                <span>
                    {metrics?.reposts|| 0}
                </span>                
            </button>

            <button className="action-btn" aria-label="Me gusta">
                <FcLike size={20}/>
                <span>
                    {metrics?.likes || 0}
                </span>                
            </button>

            <button className="action-btn" aria-label="Guardar">
                <HiSave size={20}/>              
            </button>

            <button className="action-btn" aria-label="Compartir">
                <FiShare2 size={20}/>              
            </button>
        </div>
    </footer>
)
}
