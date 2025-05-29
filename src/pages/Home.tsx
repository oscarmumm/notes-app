import { useNotes } from '../hooks/useNotes';
import NotesGrid from '../components/NotesGrid';
import Header from '../components/Header';
import NewNoteBtn from '../components/NewNoteBtn';

export default function Home() {
    const { notes } = useNotes();
    return (
        <div>
            <Header />
            <NotesGrid notes={notes} />
            <NewNoteBtn />
        </div>
    );
}
