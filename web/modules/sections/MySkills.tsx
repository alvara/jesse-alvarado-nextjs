import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'

export default function MySkills({tags}) {
  console.log("this is the taglist", tags)
  // filter out only 
  return (
    <div id="about">
      <h1 className='text-center'>Skills & Experience</h1>
      <div className='row'>
        <div className='col-md-7'>
          <div className='row row-cols-sm-6 row-cols-md-4 text-center'>
            {tags.map((tag)=>(
            <div><Image src={tag.image} width="100" height="100" layout="responsive" objectFit='scale-down' alt="test" className="p-2"/>
              <h5>{tag.title}</h5>
            </div>
            ))}
          </div>
        </div>
        <div className='col-md-5'>
          <p>I'm a self-driven, team-oriented full stack developer with a background in web development. I aim to solve problems and drive results for clients by developing web applications that are fast in performance, flexible in design, and typed in clean code for easy collaboration and maintenance.</p>
          <p>I am currently focused on learning and applying Go(Golang) and Google Cloud Platform (GCP) services to projects that are built on NextJS.</p>
          <div className='row'>
            <div className='col-md-3'>Work Experience</div>
            <div className='col-md-9'><h5>Full Stack Developer</h5><h5>Beams Inc.</h5></div>
            <div className='col-md-3'>Education</div>
            <div className='col-md-9'>Western Washington University</div>
            <div className='col-md-3'>Certifications</div>
            <div className='col-md-9'>Google Skill Badges - Firebase, Google Cloud Basics<br />Le Wagon - Ruby on Rails Bootcamp 2021</div>
            <div className='col-md-9'></div>
          </div>
        </div>
      </div>
    </div>

  )
}

MySkills.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object)
}