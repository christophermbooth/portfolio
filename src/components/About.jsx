import React, { useEffect } from 'react'
import '../styles/About.scss';
import Chris from '../images/Chris.jpeg'

const About = () => {

  useEffect(() => {
    document.title = "About || Christopher Booth"
    return () => {
      document.title = "Christopher Booth"
    }
  }, [])

  return (
    <div className="content">
      <div className="container">
        <div className="text-group">
          <h2>About me</h2>
          <p>Hi, I'm Chris! I am a software developer based in New Orleans, LA with an incredible passion for technology and how
          far it can take us.  Growing up, I wanted to be an engineer so I tinkered with electronics.
          I usually broke more than I fixed.
          </p>
          <p>
            Since 2006, I've been engrossed in computers - both hardware and software.  I tore apart machines, rebuilt them, built new ones from scratch,
            played video games, modified video games, hosted 24/7 dedicated game servers, managed the home network to safely expose it to the internet, repurposed old commercial grade
            server hardware for home use, spun up multiple services all in virtualized environments, and generally taught myself everything I know.
          </p>
          <p>
            I have over 5 years of experience with HTML and CSS
            and over 2 years with JavaScript.  I recently graduated from Operation Spark in New Orleans as
            a full stack web developer with a certificate in IBC fundamentals of Javascript, functional programming,
            and web development level 3.  I learned a lot from Operation Spark and I'm excited to see what's next.
          </p>
          <p>
            When I'm not occupied at my desk, I'm often diving into a fantasy novel, watching a film, planning a new computer build,
            reading up on a new boardgame, or catching up with friends and family.
          </p>
        </div>
        <div className="cb-img">
          <img src={Chris} height="500px" />
        </div>
      </div>
    </div>
  )
}

export default About
