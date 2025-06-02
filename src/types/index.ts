export type Note = {
    id: string;
    title: string;
    content: string;
    color?: string;
    pinned: boolean;
    createdAt: string;
    updatedAt?: string;
};

export type NotesContextType = {
    notes: Note[];
    createNote: (note: Note) => void;
    updateNote: (note: Note) => void;
    deleteNote: (id: string) => void;
    pinNote: (id: string) => void;
    unPinNote: (id: string) => void;
    selectNoteColor: (id: string, color: string) => void;
};
