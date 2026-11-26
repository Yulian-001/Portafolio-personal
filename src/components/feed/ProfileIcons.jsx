import { FiMoreHorizontal } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";


export function Options({ emailLink, phoneLink }) {
    return (
        <details className="profile-options">
            <summary className="profile-option-trigger" aria-label="Opciones de perfil">
                <FiMoreHorizontal aria-hidden="true" />
            </summary>
            <div className="profile-options-panel">
                <a href={emailLink}>Enviar correo</a>
                <a href={phoneLink}>Llamar</a>
            </div>
        </details>
    )
}

export function Location() {
    return (
        <div>
            <button>
                <IoLocationOutline className="  size-6 lg:size-8 " />
                <span className="text-xs font-medium">
                </span>
            </button>
        </div>
    )
}

export function Emails() {
    return (
        <div>
            <button>
                <AiOutlineMail className="   size-6 lg:size-8 " />
                <span className="text-xs font-medium">
                </span>
            </button>
        </div>
    )
}

export function Phone() {
    return (
        <section>
            <div>
                <button>
                    <LuPhone className="size-6 lg:size-8 " />
                </button>
            </div>
        </section>
    )
}

export function Whatsapp() {
    return <MdWhatsapp aria-hidden="true" className="size-6" />;
}
export function ArrowSidebar() {
    return (
        <section>
            <div>
                <svg
                    className="w-20 h-20 text-white" // <--- Controla el tamaño del icono aquí
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <MdOutlineDoubleArrow className=" animate-pulse  " />
                </svg>
            </div>
        </section>
    )
}
