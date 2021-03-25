import React from 'react'
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects.js';
import '../styles/Projects.scss';

const Projects = () => {
  return (
    <div className="content">
      <div className="projects">
        {projectsData.map(({ Name, Image, GitHub, Description, Tech }) => {
          return <ProjectCard
            key={Name}
            Name={Name}
            Image={Image}
            GitHub={GitHub}
            Description={Description}
            Tech={Tech}
          />
        })}
      </div>
    </div>
  )
}

export default Projects
