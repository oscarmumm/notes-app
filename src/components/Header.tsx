import { MdOutlineStickyNote2 } from 'react-icons/md';
import NewNoteBtn from './NewNoteBtn';

export default function Header() {
    return (
        <header className='bg-sky-700 p-3 flex items-center justify-center'>
            <h1 className='text-3xl font-semibold'>Keep Notes</h1>
            <MdOutlineStickyNote2 className='h-8 w-8 ml-3' />
            <NewNoteBtn />
        </header>
    );
}
