import { useState } from 'react';
import { useNotes } from '../hooks/useNotes';
import { useParams } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import NoteOptionsModal from '../components/modals/NoteOptionsModal';

export default function NoteEditor() {
    const { notes } = useNotes();
    const params = useParams();
    const [note, setNote] = useState(
        notes.find((note) => note.id === params.id)
    );
    const [optionsModalActive, setOptionsModalActive] = useState(false)
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (!note) return;
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    console.log(params.id);
    console.log(note);
    return (
        <div className='p-3'>
            <div className='flex justify-between p-3'>
                <IoMdArrowBack className='h-8 w-8' />
                <HiOutlineDotsVertical className='h-8 w-8' />
            </div>
            <form className='flex flex-col p-3'>
                <input
                    className='font-bold text-xl p-1 outline-none mb-3'
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={note?.title}
                />
                <textarea
                    className='resize-none text-lg p-1 outline-none'
                    name='content'
                    onChange={handleChange}
                    value={note?.content}
                ></textarea>
                <button className='bg-sky-500 w-40 self-center p-2 rounded-lg shadow-xl font-bold'>
                    Save
                </button>
            </form>
            {optionsModalActive && <NoteOptionsModal />}
        </div>
    );
}
