import type { Note } from '../types';
import { useNavigate } from 'react-router';
import { TiPin } from 'react-icons/ti';

type NoteCardProps = {
    note: Note;
};

export default function NoteCard({ note }: NoteCardProps) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`note/${note.id}`);
    };
    return (
        <div
            className='bg-sky-900 p-3 rounded-lg shadow-xl'
            onClick={handleClick}
        >
            <div className='flex'>
                <h3 className='font-bold'>{note.title}</h3>
                {note.pinned && <TiPin className='h-8 w-8' />}
            </div>
            <p>{note.content}</p>
        </div>
    );
}
