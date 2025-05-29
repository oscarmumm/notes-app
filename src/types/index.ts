export type Note = {
    id: string;
    title: string;
    content: string;
    color?: string;
    pinned: boolean;
    createdAt: string;
    updatedAt?: string;
    tags?: string[];
};

export type NotesContextType = {
    notes: Note[];
    createNote: () => void;
    updateNote: () => void;
    deleteNote: () => void;
};
