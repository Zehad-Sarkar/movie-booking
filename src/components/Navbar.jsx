import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <Link to="/" className="menu-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="menu-item">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
