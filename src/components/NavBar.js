import {NavLink} from 'react-router-dom'
import '../styles/NavBar.css'
import simsBanner from '../images/simsbannerplaceholder.png'

function NavBar() {
  return (
    <>
      <div className='banner-container'>
        <img src={simsBanner} alt="sims blog banner"/>
      </div>
        <nav className="nav-navbar">
            <ul className="nav-ul">
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/donate" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Donate</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Feedback</NavLink>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default NavBar;