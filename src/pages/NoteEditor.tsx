import { useState } from 'react';
import { useNotes } from '../hooks/useNotes';
import { useNavigate, useParams } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import NoteOptionsModal from '../components/modals/NoteOptionsModal';
import { AnimatePresence } from 'motion/react';
import { v4 as uuidv4 } from 'uuid';

export default function NoteEditor() {
    const [optionsModalActive, setOptionsModalActive] = useState(false);
    const { notes, createNote, updateNote } = useNotes();
    const params = useParams();
    const [note, setNote] = useState(() => {
        const found = notes.find((note) => note.id === params.id);
        if (found) return found;
        const newID = uuidv4();
        const creationDate = new Date();
        return {
            id: newID,
            title: '',
            content: '',
            pinned: false,
            createdAt: creationDate.toISOString(),
        };
    });
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (!note) return;
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const clickOnOptions = () => {
        setOptionsModalActive(true);
    };
    const closeOptionsModal = () => {
        setOptionsModalActive(false);
    };

    const clickOnBack = () => {
        const found = notes.find((n) => n.id === note.id);
        if (note?.title.length === 0 && note?.content.length === 0) {
            console.log('Nota vacía');
            navigate('/');
        } else if (found) {
            console.log('Actualizar nota');
            updateNote(note);
            navigate('/');
        } else {
            createNote(note);
            console.log('Nueva nota creada');
            navigate('/');
        }
    };

    return (
        <div
            className={`${
                note.color?.replace('00', '50') || 'bg-sky-950'
            } min-h-screen p-3 flex flex-col items-center justify-center lg:max-w-4xl w-full mx-auto`}
        >
            <div className='w-full flex justify-between p-3 xl:mb-5'>
                <button onClick={clickOnBack}>
                    <IoMdArrowBack className='h-8 w-8' />
                </button>
                <button onClick={clickOnOptions}>
                    <HiOutlineDotsVertical className='h-8 w-8' />
                </button>
            </div>
            <form className='w-full flex-1 flex flex-col p-3'>
                <div className='flex flex-col'>
                    <input
                        className='font-bold text-xl p-1 outline-none mb-3'
                        type='text'
                        name='title'
                        placeholder='Título'
                        onChange={handleChange}
                        value={note?.title}
                    />
                    <textarea
                        className='resize-none text-lg p-1 outline-none min-h-96'
                        name='content'
                        placeholder='Escribe tu nota aquí'
                        onChange={handleChange}
                        value={note?.content}
                    ></textarea>
                </div>
            </form>
            <AnimatePresence>
                {optionsModalActive && (
                    <NoteOptionsModal
                        closeOptionsModal={closeOptionsModal}
                        note={note}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
