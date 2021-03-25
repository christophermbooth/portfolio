import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Developer from '../images/developer.svg';
import '../styles/Landing.scss'
const Landing = () => {

  useEffect(() => {
    document.title = "Christopher Booth"
    return () => {
      document.title = "Christopher Booth"
    }
  }, [])

  return (
    <div className="content">
      <div className="landing">
        <div className='text-column'>
          <h1>Hi, <br /> I'm Chris</h1>
          <h3>full stack web developer</h3>
          <Link to="/about"><button className="btn"><h4>Get to Know Me</h4></button></Link>
        </div>
        <div className="image-column">
          <Developer />
        </div>
      </div>
    </div>
  )
}

export default Landing
