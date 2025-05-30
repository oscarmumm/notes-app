import {useState} from 'react'
import {useNotes} from '../hooks/useNotes'
import {useNavigate, useParams} from 'react-router'
import {IoMdArrowBack} from 'react-icons/io'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import NoteOptionsModal from '../components/modals/NoteOptionsModal'
import {AnimatePresence} from 'motion/react'
import ConfirmationModal from '../components/modals/ConfirmationModal'

const emptyNote = {
    id: '',
    title: '',
    content: '',
}

export default function NoteEditor() {
    const [optionsModalActive, setOptionsModalActive] = useState(false)
    const [confirmationModalActive, setConfirmationModalActive] =
        useState(false)
    const [confirmationModalMessage, setConfirmationModalMessage] = useState('')
    const {notes} = useNotes()
    const params = useParams()
    const [note, setNote] = useState(() => {
        const found = notes.find((note) => note.id === params.id)
        return found ?? emptyNote
    })
    const navigate = useNavigate()

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (!note) return
        setNote({...note, [e.target.name]: e.target.value})
        console.log(note)
    }

    const clickOnOptions = () => {
        setOptionsModalActive(true)
    }
    const closeOptionsModal = () => {
        setOptionsModalActive(false)
    }

    const clickOnBack = () => {
        if (note?.title.length === 0 && note?.content.length === 0) {
            navigate('/')
        } else {
            setConfirmationModalMessage('¿Desea volver sin guardar?')
            setConfirmationModalActive(true)
        }
    }

    const agreeAction = () => {
        navigate('/')
    }
    const cancelAction = () => {
        setConfirmationModalActive(false)
    }

    return (
        <div className="min-h-screen p-3 flex flex-col">
            <div className="flex justify-between p-3">
                <button onClick={clickOnBack}>
                    <IoMdArrowBack className="h-8 w-8" />
                </button>
                <button onClick={clickOnOptions}>
                    <HiOutlineDotsVertical className="h-8 w-8" />
                </button>
            </div>
            <form className="flex-1 flex flex-col p-3">
                <div className="flex flex-col">
                    <input
                        className="font-bold text-xl p-1 outline-none mb-3"
                        type="text"
                        name="title"
                        placeholder='Título'
                        onChange={handleChange}
                        value={note?.title}
                    />
                    <textarea
                        className="resize-none text-lg p-1 outline-none min-h-96"
                        name="content"
                        placeholder='Escribe tu nota aquí'
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
            <AnimatePresence>
                {confirmationModalActive && (
                    <ConfirmationModal
                        message={confirmationModalMessage}
                        agreeAction={agreeAction}
                        cancelAction={cancelAction}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
