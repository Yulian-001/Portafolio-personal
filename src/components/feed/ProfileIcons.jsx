import { FiMoreHorizontal } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";


export function Options() {
    return (
        <div>
            <button>
                <FiMoreHorizontal className="bg-mist-700/60 p-1 mt-1  size-5 lg:size-8 rounded-full border" />
                <span className="text-xs font-medium">
                </span>
            </button>
        </div>
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
    return (
        <section>
            <div>
                <button>
                    <MdWhatsapp className="size-10 lg:size-12  text-white bg-consoleGreen  rounded-full " />
                </button>
            </div>
        </section>
    )
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