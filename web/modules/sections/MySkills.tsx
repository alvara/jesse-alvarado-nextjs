import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function MySkills({tags}) {
  // filter out only 
  return (
    <div id="about">
      <div className='text-center'>
        <span className='preTitle '>About Me</span>
        <h2 className='text-center'>Skills & Experience</h2>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          {/* Skill Icons */}
          <div className='row row-cols-2 row-cols-sm-3 row-cols-lg-3 row-cols-xl-4  text-center'>
            {tags.map((tag)=>(
            <div key={tag._id} >
              <div className='circle-icon '>
                <Image src={tag.image} width="100" height="100" layout="responsive" objectFit='scale-down' alt="test" className="p-4"/>
              </div>
              <h6 className='mb-4 mb-sm-5'>{tag.title}</h6>
            </div>
            ))}
          </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          {/* Bio and History */}
          <p>I'm a self-driven, team-oriented full stack developer with a background in web development.</p><p>I aim to solve problems and drive results for clients by developing web applications that are fast in performance, flexible in design, and typed in clean code for easy collaboration and maintenance.</p>
          <p>I am currently focused on learning and applying Go(Golang) and Google Cloud Platform (GCP) services to projects that are built on NextJS.</p>
          <div className='row'>
            <div className='col-12'>
              <div className="table-responsive">
              <table className="table caption-top">
              <caption>History At a Glance</caption>
                <tbody>
                  <tr>
                    <th scope="row">Work Experience</th>
                    <td>Full Stack Developer<br/>Beams Inc., Tokyo (2016-2021)</td>
                  </tr>
                  <tr>
                    <th scope="row">Education</th>
                    <td>BA Mgmt. Information Systems<br/>Western Washington University</td>
                  </tr>
                  <tr>
                    <th scope="row">Certifications</th>
                    <td>Ruby on Rails Bootcamp 2021<br /> 
                      Le Wagon - Tokyo (2021)<br/>
                      <Link href="/lewagon-certificate.pdf">Certificate</Link>
                      <br /><br />

                      Google Cloud Essentials<br/>
                      <Link href="https://www.cloudskillsboost.google/public_profiles/e6ee1b1f-fdc4-4ef4-a99f-95176b203d30">Google Skill badge</Link><br/><br/>

                      Serverless Firebase Development<br/>
                      <Link href="https://www.cloudskillsboost.google/public_profiles/e6ee1b1f-fdc4-4ef4-a99f-95176b203d30">Google Skill badge</Link>            
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>     
          </div>
        </div>
      </div>
    </div>
  )
}

MySkills.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object)
}