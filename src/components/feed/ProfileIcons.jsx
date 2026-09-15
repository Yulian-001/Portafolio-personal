import { FiMoreHorizontal } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";




export  function Options() {
    return(
        <div>
                <button>
                    <FiMoreHorizontal className="bg-mist-700/60 p-1 mt-1  size-5 lg:size-8 rounded-full border" />
                    <span className="text-xs font-medium">
                    </span>
                </button>
                </div>
    )
}

export  function Location() {
    return(
        <div>
                <button>
                    <IoLocationOutline className="  size-4 md:size-8 " />
                    <span className="text-xs font-medium">
                    </span>
                </button>
                </div>
    )
}

export  function Emails() {
    return(
        <div>
                <button>
                    <AiOutlineMail className="   size-4 md:size-8 " />
                    <span className="text-xs font-medium">
                    </span>
                </button>
                </div>
    )
}

export  function Phone ({metrics}) {
    return(
        <section>
                <div>
                    <button>
                        <LuPhone className="size-4 md:size-8 "/>
                    </button>
                </div>
        </section>
    )
}