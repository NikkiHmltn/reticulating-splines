import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/donate">Donate</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Feedback</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;