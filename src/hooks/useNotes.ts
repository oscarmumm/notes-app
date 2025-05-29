import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error('useNotes debe usarse dentro de Notes Provider');
    }
    return context;
};
