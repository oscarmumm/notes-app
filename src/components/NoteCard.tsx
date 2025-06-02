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
            className={`${note.color || 'bg-sky-900'} p-3 rounded-lg shadow-xl`}
            onClick={handleClick}
        >
            <div className='flex justify-between mb-3'>
                <h3 className='font-bold text-lg'>{note.title}</h3>
                    {note.pinned && <TiPin className='min-w-6 h-6' />}
            </div>
            <p>{note.content}</p>
        </div>
    );
}
