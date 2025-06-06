import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { placeholderNotes } from '../utils/placeholderNotes';
import type { NotesContextType, Note } from '../types';

export const NotesContext = createContext<NotesContextType | undefined>(
    undefined
);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
    const [notes, setNotes] = useState<Note[]>(() => {
        const saved = localStorage.getItem('notes')
        return saved ? JSON.parse(saved) : placeholderNotes
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const createNote = (note: Note) => {
        setNotes((prev) => [...prev, note]);
    };

    const updateNote = (note: Note) => {
        const temp = notes.map((el) => (el.id === note.id ? note : el));
        setNotes(temp);
    };

    const deleteNote = (id: string) => {
        const temp = notes.filter((el) => el.id !== id);
        setNotes(temp);
    };

    const pinNote = (id: string) => {
        const temp = notes.map((el) => {
            if (el.id === id) {
                el.pinned = true;
            }
            return el;
        });
        setNotes(temp);
    };

    const unPinNote = (id: string) => {
        const temp = notes.map((el) => {
            if (el.id === id) {
                el.pinned = false;
            }
            return el;
        });
        setNotes(temp);
    };

    const selectNoteColor = (id: string, color: string) => {
        const temp = notes.map((el) => {
            if (el.id === id) {
                el.color = color;
            }
            return el;
        });
        setNotes(temp)
    };

    return (
        <NotesContext.Provider
            value={{
                notes,
                createNote,
                updateNote,
                deleteNote,
                pinNote,
                unPinNote,
                selectNoteColor
            }}
        >
            {children}
        </NotesContext.Provider>
    );
};
