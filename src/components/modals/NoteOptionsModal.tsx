import { useState } from 'react';
import { TiPin } from 'react-icons/ti';
import { TiPinOutline } from 'react-icons/ti';
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdColorPalette } from 'react-icons/io';
import { IoMdArrowBack } from 'react-icons/io';
import { AnimatePresence, motion } from 'motion/react';
import type { Note } from '../../types';
import { useNotes } from '../../hooks/useNotes';
import { useNavigate } from 'react-router';
import ColorSelectorModal from './ColorSelectorModal';
import ConfirmationModal from './ConfirmationModal';

type NoteOptionsModalProps = {
    closeOptionsModal: () => void;
    note: Note;
};

// TO DO:
// - MODAL PARA SELECCIONAR COLOR
// - MODAL DE CONFIRMACIÓN ANTES DE ELIMINAR LA NOTA

export default function NoteOptionsModal({
    closeOptionsModal,
    note,
}: NoteOptionsModalProps) {
    const { deleteNote, pinNote, unPinNote } = useNotes();
    const [confirmationModalActive, setConfirmationModalActive] =
        useState(false);
    const [confirmationModalMessage, setConfirmationModalMessage] =
        useState('');
    const [colorSelectorModalActive, setColorSelectorModalActive] =
        useState(false);
    const navigate = useNavigate();
    const clickOnBack = () => {
        closeOptionsModal();
    };

    const clickOnDelete = () => {
        setConfirmationModalMessage('¿Está seguro que desea eliminar la nota?');
        setConfirmationModalActive(true);
    };

    const agreeAction = () => {
        navigate('/');
        deleteNote(note.id);
    };

    const cancelAction = () => {
        setConfirmationModalActive(false);
    };

    const clickOnPin = () => {
        closeOptionsModal();
        pinNote(note.id);
    };

    const clickOnUnpin = () => {
        closeOptionsModal();
        unPinNote(note.id);
    };

    const clickOnOpenColorSelector = () => {
        setColorSelectorModalActive(true);
    };

    const closeColorSelectorModal = () => {
        setColorSelectorModalActive(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 left-0 flex flex-col justify-end items-center h-screen w-full modal-main-bg'
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ type: 'tween', delay: 0 }}
                className={`${
                    note.color || 'bg-sky-900'
                } flex flex-col py-3 font-semibold rounded-tl-4xl rounded-tr-4xl w-1/2 lg:max-w-4xl`}
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
                <button
                    className='flex items-center text-lg p-3'
                    onClick={clickOnOpenColorSelector}
                >
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
                <AnimatePresence>
                    {colorSelectorModalActive && (
                        <ColorSelectorModal
                            closeColorSelectorModal={closeColorSelectorModal}
                            note={note}
                        />
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
            </motion.div>
        </motion.div>
    );
}
