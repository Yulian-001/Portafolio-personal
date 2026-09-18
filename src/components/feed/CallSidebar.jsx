import { ArrowSidebar } from "./ProfileIcons";

export default function CallSidebar({onOpen}) {


    return(
        <section>
            <button
                onClick={onOpen}
                className="md:hidden fixed z-50 transform -scale-x-100 animate-latir right-3 "
            >
                <ArrowSidebar />
            </button>
        </section>
    )
}