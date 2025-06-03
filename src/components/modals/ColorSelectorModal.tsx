import { motion } from 'motion/react';
import type { Note } from '../../types';
import { useNotes } from '../../hooks/useNotes';

type ColorSelectorModalProps = {
    closeColorSelectorModal: () => void;
    note: Note;
};

export default function ColorSelectorModal({
    closeColorSelectorModal, note
}: ColorSelectorModalProps) {
    const { selectNoteColor } = useNotes();
    const clickOnColor = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log(e.currentTarget.value)
        selectNoteColor(note.id, e.currentTarget.value)
        closeColorSelectorModal()
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
                className='flex flex-col bg-sky-800 py-3 font-semibold rounded-tl-4xl rounded-tr-4xl w-full lg:max-w-4xl'
            >
                <div className='grid grid-cols-4 gap-5 justify-items-center p-5'>
                    <button
                        className='bg-sky-900 w-16 h-16 rounded-lg border border-sky-50'
                        value='bg-sky-900'
                        onClick={clickOnColor}
                    ></button>
                    <button
                        className='bg-red-900 w-16 h-16 rounded-lg border border-sky-50'
                        value='bg-red-900'
                        onClick={clickOnColor}
                    ></button>
                    <button
                        className='bg-blue-900 w-16 h-16 rounded-lg border border-sky-50'
                        value='bg-blue-900'
                        onClick={clickOnColor}
                    ></button>
                    <button
                        className='bg-yellow-900 w-16 h-16 rounded-lg border border-sky-50'
                        value='bg-yellow-900'
                        onClick={clickOnColor}
                    ></button>
                    <button
                        className='bg-emerald-900 w-16 h-16 rounded-lg border border-sky-50'
                        value='bg-emerald-900'
                        onClick={clickOnColor}
                    ></button>
                    <button
                        className='bg-indigo-900 w-16 h-16 rounded-lg border border-sky-50'
                        value='bg-indigo-900'
                        onClick={clickOnColor}
                    ></button>
                </div>
            </motion.div>
        </motion.div>
    );
}
