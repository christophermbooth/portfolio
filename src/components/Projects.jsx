import React from 'react'
import ProjectCard from './ProjectCard';
import {projectsData} from '../data/projects.js';

const Projects = () => {
  return (
    <div>
      {projectsData.map(({ Name, Image, GitHub, Description }) => {
        return <ProjectCard
          key={Name}
          Name={Name}
          Image={Image}
          GitHub={GitHub}
          Description={Description}
        />
      })}
    </div>
  )
}

export default Projects
