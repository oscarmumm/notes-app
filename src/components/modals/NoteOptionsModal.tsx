import {TiPin} from 'react-icons/ti'
import {FaTrashAlt} from 'react-icons/fa'
import {IoMdColorPalette} from 'react-icons/io'
import {IoMdArrowBack} from 'react-icons/io'
import {motion} from 'motion/react'

type NoteOptionsModalProps = {
    closeOptionsModal: () => void
}

// TO DO:
// - LOGICA PARA FIJAR NOTAS
// - MODAL PARA SELECCIONAR COLOR
// - LOGICA PAR ALIMINAR LA NOTA

export default function NoteOptionsModal({
    closeOptionsModal,
}: NoteOptionsModalProps) {
    const clickOnBack = () => {
        closeOptionsModal()
    }
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed top-0 left-0 flex flex-col justify-end h-screen w-full modal-main-bg">
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
                transition={{type: 'tween', delay: 0}}
                className="flex flex-col bg-sky-800 py-3 font-semibold rounded-tl-4xl rounded-tr-4xl">
                <button className="flex items-center text-lg p-3">
                    <TiPin className="h-6 w-6 ml-3" />
                    <span className="ml-5">Pin</span>
                </button>
                <button className="flex items-center text-lg p-3">
                    <FaTrashAlt className="h-6 w-6 ml-3" />
                    <span className="ml-5">Delete</span>
                </button>
                <button className="flex items-center text-lg p-3">
                    <IoMdColorPalette className="h-6 w-6 ml-3" />
                    <span className="ml-5">Select color</span>
                </button>
                <button
                    className="flex items-center text-lg p-3"
                    onClick={clickOnBack}>
                    <IoMdArrowBack className="h-6 w-6 ml-3" />
                    <span className="ml-5">Back</span>
                </button>
            </motion.div>
        </motion.div>
    )
}
