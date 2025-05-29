import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { placeholderNotes } from '../utils/placeholderNotes';
import type { NotesContextType, Note } from '../types';

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
    const [notes, setNotes] = useState<Note[]>(placeholderNotes);
    const createNote = () => {};
    const updateNote = () => {};
    const deleteNote = () => {};
    return (
        <NotesContext.Provider
            value={{ notes, createNote, updateNote, deleteNote }}
        >
            {children}
        </NotesContext.Provider>
    );
};
