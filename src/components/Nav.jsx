import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav-bar">
      <div className="logo">
        <Link to='/'>Logo?</Link>
      </div>
      <div className='nav-links'>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/resume'>Resume</Link>
      </div>
    </nav>
  )
}

export default Nav
