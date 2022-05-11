import {NavLink} from 'react-router-dom'
import {useEffect } from 'react'
import M from  'materialize-css'
import '../styles/NavBar.css'
import simsBanner from '../images/sims2.png'

function NavBar() {


  useEffect(()=> {
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {edge: 'left'});
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});
  }, [])


  return (
    <div>
      <div className='banner-container'>
        <img src={simsBanner} alt="sims blog banner"/>
      </div>

      <ul id='gen-drop' className='dropdown-content'>
            <li><NavLink to="/generators/sim" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Sim Generator</NavLink></li>
            <li><NavLink to="/generators/home" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>House Generator</NavLink></li>
      </ul>
      <ul id='gen-drop-2' className='dropdown-content'>
            <li><NavLink to="/generators/sim" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Sim Generator</NavLink></li>
            <li><NavLink to="/generators/home" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>House Generator</NavLink></li>
      </ul>

      <nav>
        <div className="nav-wrapper">
          <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
          <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Blog</NavLink>
        </li>
        {/* <!-- Dropdown Trigger --> */}
        <li><a className="dropdown-trigger" href="#!" data-target="gen-drop" data-activates="gen-drop">Generators<i className="material-icons right">arrow_drop_down</i></a></li>
        <li>                    
          <NavLink to="/donate" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Donate</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Feedback</NavLink>
        </li>
          </ul>
        </div>
      </nav>

      
   
      <ul className="sidenav" id="slide-out">
      <li>
            <NavLink to="/" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Blog</NavLink>
          </li>
          <li>
            
          <a className='dropdown-trigger' href='#' data-target='gen-drop-2'>Generators</a>
          </li>
          <li>                    
            <NavLink to="/donate" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Donate</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => (isActive ? "active-navlink" : "navlink")}>Feedback</NavLink>
          </li>
      </ul>
    </div>
  );
}

export default NavBar;