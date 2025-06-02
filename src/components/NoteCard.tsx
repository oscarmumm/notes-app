import type {Note} from '../types'
import {Link} from 'react-router'
import {TiPin} from 'react-icons/ti'

type NoteCardProps = {
    note: Note
}
// REVISAR CORTE DEL TITLE

export default function NoteCard({note}: NoteCardProps) {
    return (
        <Link
            to={`note/${note.id}`}
            className={`${note.color || 'bg-sky-900'} p-3 rounded-lg shadow-xl`}
        >
            <div className="flex justify-between mb-3">
                {note.title.length > 30 ? (
                    <p className="font-bold text-lg">
                        {note.title.slice(0, 30)}...
                    </p>
                ) : (
                    <p className="font-bold text-lg">{note.title}</p>
                )}
                {note.pinned && <TiPin className="min-w-6 h-6" />}
            </div>
            {note.content.length > 50 ? (
                <p>{note.content.slice(0, 50)}...</p>
            ) : (
                <p>{note.content}</p>
            )}
        </Link>
    )
}
