import React from 'react'
import '../styles/ProjectCard.scss';

const ProjectCard = ({ Name, Image, GitHub, Description, Tech }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={Image} alt="project image" />
      </div>
      <div className="card-body">
        <h2 className="card-header">{Name}</h2>
        <p className="card-description">{Description}</p>
        <h3>Technology:</h3>
        <p>{Tech}</p>
      </div>
      <a href={GitHub} className="gh-link"><button className="card-button">Explore Repo</button></a>
    </div>
  )
}

export default ProjectCard
