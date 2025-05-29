import type { Note } from '../types';
import NoteCard from './NoteCard';

type NotesGridProps = {
    notes: Note[];
};

export default function NotesGrid({ notes }: NotesGridProps) {
    const pinnedNotes = notes.filter((note) => note.pinned);
    const notPinnedNotes = notes.filter((note) => !note.pinned);
    return (
        <div>
            <div className='p-3'>
                <h3 className='p-3'>Pinned Notes</h3>
                <div className='grid grid-cols-2 gap-3'>
                    {pinnedNotes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            </div>
            <div className='p-3'>
                <h3 className='p-3'>Other</h3>
                <div className='grid grid-cols-2 gap-3'>
                    {notPinnedNotes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            </div>
        </div>
    );
}
