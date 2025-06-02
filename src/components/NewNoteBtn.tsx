import {FaPlus} from 'react-icons/fa'
import {Link} from 'react-router'

export default function NewNoteBtn() {
    return (
        <Link
            to="/new-note"
            className="fixed flex items-center justify-center bottom-10 right-10 xl:absolute xl:bottom-auto xl:right:auto bg-sky-400 p-3 rounded-xl shadow-xl">
                <span className='hidden xl:flex font-bold mr-3'>New Note</span>
            <FaPlus className="w-8 h-8 xl:w-6 xl:h-6" />
        </Link>
    )
}
