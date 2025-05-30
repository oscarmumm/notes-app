import {FaPlus} from 'react-icons/fa'
import {Link} from 'react-router'

export default function NewNoteBtn() {
    return (
        <Link
            to="/new-note"
            className="fixed bottom-10 right-10 bg-sky-400 p-3 rounded-xl shadow-xl">
            <FaPlus className="w-8 h-8" />
        </Link>
    )
}
