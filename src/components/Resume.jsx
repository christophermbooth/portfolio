import React from 'react'

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1_9eRw68ve9jbRtBKm_LvQLkONEBqkIKa/preview"
  return (
    <div className="content">
      <h3>My Resume</h3>
      <embed src={resumeLink} width="100%" height="800px">
      </embed>
    </div>
  )
}

export default Resume
