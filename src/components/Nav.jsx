import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {
  return (
    <nav id="nav-bar">
      <div className="logo">
        <Link to='/'>Logo</Link>
      </div>
      <ul className='nav-links'>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
