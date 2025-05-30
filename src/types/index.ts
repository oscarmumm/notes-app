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
};
