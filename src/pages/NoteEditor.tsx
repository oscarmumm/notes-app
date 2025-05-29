import {useState} from 'react'
import {useNotes} from '../hooks/useNotes'
import {useParams} from 'react-router'
import {IoMdArrowBack} from 'react-icons/io'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import NoteOptionsModal from '../components/modals/NoteOptionsModal'
import {AnimatePresence} from 'motion/react'

export default function NoteEditor() {
    const [optionsModalActive, setOptionsModalActive] = useState(false)
    const {notes} = useNotes()
    const params = useParams()
    const [note, setNote] = useState(
        notes.find((note) => note.id === params.id)
    )

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (!note) return
        setNote({...note, [e.target.name]: e.target.value})
    }

    const clickOnOptions = () => {
        setOptionsModalActive(true)
    }
    const closeOptionsModal = () => {
        setOptionsModalActive(false)
    }

    return (
        <div className="min-h-screen  p-3">
            <div className="flex justify-between p-3">
                <button>
                    <IoMdArrowBack className="h-8 w-8" />
                </button>
                <button onClick={clickOnOptions}>
                    <HiOutlineDotsVertical className="h-8 w-8" />
                </button>
            </div>
            <form className="flex flex-col justify-end p-3">
                <div className="flex flex-col">
                    <input
                        className="font-bold text-xl p-1 outline-none mb-3"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={note?.title}
                    />
                    <textarea
                        className="resize-none text-lg p-1 outline-none"
                        name="content"
                        onChange={handleChange}
                        value={note?.content}></textarea>
                </div>
                <button className="bg-sky-500 w-40 self-center p-2 rounded-lg shadow-xl font-bold">
                    Save
                </button>
            </form>
            <AnimatePresence>
                {optionsModalActive && (
                    <NoteOptionsModal closeOptionsModal={closeOptionsModal} />
                )}
            </AnimatePresence>
        </div>
    )
}
