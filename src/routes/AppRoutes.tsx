import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import NoteEditor from '../pages/NoteEditor';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/note/:id' element={<NoteEditor />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};
