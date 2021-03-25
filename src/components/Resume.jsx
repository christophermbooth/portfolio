import React from 'react'
import '../styles/Resume.scss';

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1_9eRw68ve9jbRtBKm_LvQLkONEBqkIKa/preview"
  return (
    <div className="content">
      <h2 className="resume-header">My Resume</h2>
      <object data={resumeLink} className="resume-object">
        It appears your browser is having trouble viewing the document.  <a href="https://drive.google.com/file/d/1_9eRw68ve9jbRtBKm_LvQLkONEBqkIKa/view?usp=sharing">Click here to download it.</a>
      </object>
    </div>
  )
}

export default Resume
