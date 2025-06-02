import type {Note} from '../types'
import NoteCard from './NoteCard'

type NotesGridProps = {
    notes: Note[]
}

export default function NotesGrid({notes}: NotesGridProps) {
    const pinnedNotes = notes.filter((note) => note.pinned)
    const notPinnedNotes = notes.filter((note) => !note.pinned)
    return (
        <div className='flex flex-col items-center'>
            <div className="p-3 max-w-6xl">
                {pinnedNotes.length >= 1 && (
                    <h3 className="p-3">Pinned Notes</h3>
                )}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
                    {pinnedNotes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            </div>
            <div className="p-3 max-w-6xl">
                    {pinnedNotes.length >= 1 && (
                        <h3 className="p-3">Other</h3>
                    )}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
                    {notPinnedNotes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            </div>
        </div>
    )
}
