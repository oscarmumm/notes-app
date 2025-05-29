import { FaPlus } from "react-icons/fa";

export default function NewNoteBtn() {
    return (
        <button className="fixed bottom-10 right-10 bg-sky-400 p-3 rounded-xl shadow-xl">
            <FaPlus className="w-8 h-8" />
        </button>
    )
}
