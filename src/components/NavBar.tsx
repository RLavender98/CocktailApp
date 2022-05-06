import { Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/random">Random Cocktail Recipe</Link>
        </nav>
    );
};

export default NavBar