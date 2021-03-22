import React from 'react'

const ProjectCard = ({ Name, Image, GitHub, Description} ) => {
    return (
      <div className="container">
        <div className="card-image">
          <img src={Image} alt="project image" />
        </div>
        <div className="card-body">
          <h3 className="card-header">{Name}</h3>
          <p className="card-description">{Description}</p>
          <a href={GitHub}><button className="card-button">Explore Repo</button></a>
        </div>
      </div>
    )
}

export default ProjectCard
