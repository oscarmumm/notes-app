import { Link } from 'react-router';

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/archived'>Archived</Link>
            <Link to='/trashed'>Trashed</Link>
        </nav>
    );
}
