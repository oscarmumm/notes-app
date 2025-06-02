import type {Note} from '../types'
import {useNavigate} from 'react-router'
import {TiPin} from 'react-icons/ti'

type NoteCardProps = {
    note: Note
}
// REVISAR CORTE DEL TITLE

export default function NoteCard({note}: NoteCardProps) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`note/${note.id}`)
    }
    return (
        <div
            className={`${note.color || 'bg-sky-900'} p-3 rounded-lg shadow-xl`}
            onClick={handleClick}>
            <div className="flex justify-between mb-3">
                <h3 className="font-bold text-lg">{note.title}</h3>
                {note.title.length > 30 ? (
                    <p>{note.title.slice(0, 30)}...</p>
                ) : (
                    <p>{note.title}</p>
                )}
                {note.pinned && <TiPin className="min-w-6 h-6" />}
            </div>
            {note.content.length > 50 ? (
                <p>{note.content.slice(0, 50)}...</p>
            ) : (
                <p>{note.content}</p>
            )}
        </div>
    )
}
