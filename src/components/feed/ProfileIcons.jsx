import { FiMoreHorizontal } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";

export default function ProfileIcons ({metrics}) {
    return(
        <section>
            <header>
                <div>
                <button>
                    <FiMoreHorizontal className="bg-mist-700/60 p-1 size-8 rounded-full border-1" />
                    <span className="text-xs font-medium">
                    </span>
                </button>
                </div>
            </header>

            <main>
                <div>
                    <button>
                        <IoLocationOutline size={25}/>
                    </button>

                    <button>
                        <AiOutlineMail size={25}/>
                    </button>

                    <button>
                        <LuPhone size={25}/>
                    </button>
                </div>
            </main>
        </section>
    )
}