import { TiPin } from 'react-icons/ti';
import { TiPinOutline } from 'react-icons/ti';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdColorPalette } from 'react-icons/io';
import { IoMdArrowBack } from 'react-icons/io';
import { motion } from 'motion/react';
import type { Note } from '../../types';
import { useNotes } from '../../hooks/useNotes';
import { useNavigate } from 'react-router';

type NoteOptionsModalProps = {
    closeOptionsModal: () => void;
    note: Note;
};

// TO DO:
// - MODAL PARA SELECCIONAR COLOR

export default function NoteOptionsModal({
    closeOptionsModal,
    note,
}: NoteOptionsModalProps) {
    const { notes, deleteNote, pinNote, unPinNote } = useNotes();
    const navigate = useNavigate();
    const clickOnBack = () => {
        closeOptionsModal();
    };

    const clickOnDelete = () => {
        navigate('/');
        deleteNote(note.id);
    };

    const clickOnPin = () => {
        closeOptionsModal();
        pinNote(note.id);
    };

    const clickOnUnpin = () => {
        closeOptionsModal();
        unPinNote(note.id);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 left-0 flex flex-col justify-end h-screen w-full modal-main-bg'
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: 'tween', delay: 0 }}
                className='flex flex-col bg-sky-800 py-3 font-semibold rounded-tl-4xl rounded-tr-4xl'
            >
                {note.pinned ? (
                    <button
                        className='flex items-center text-lg p-3'
                        onClick={clickOnUnpin}
                    >
                        <TiPinOutline className='h-6 w-6 ml-3' />
                        <span className='ml-5'>Unpin</span>
                    </button>
                ) : (
                    <button
                        className='flex items-center text-lg p-3'
                        onClick={clickOnPin}
                    >
                        <TiPin className='h-6 w-6 ml-3' />
                        <span className='ml-5'>Pin</span>
                    </button>
                )}
                <button
                    className='flex items-center text-lg p-3'
                    onClick={clickOnDelete}
                >
                    <FaTrashAlt className='h-6 w-6 ml-3' />
                    <span className='ml-5'>Delete</span>
                </button>
                <button className='flex items-center text-lg p-3'>
                    <IoMdColorPalette className='h-6 w-6 ml-3' />
                    <span className='ml-5'>Select color</span>
                </button>
                <button
                    className='flex items-center text-lg p-3'
                    onClick={clickOnBack}
                >
                    <IoMdArrowBack className='h-6 w-6 ml-3' />
                    <span className='ml-5'>Back</span>
                </button>
            </motion.div>
        </motion.div>
    );
}
