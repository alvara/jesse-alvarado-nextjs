import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function MySkills({tags}) {
  // filter out only
  return (
    <div id="about">
      <div className="text-center">
        <span className="preTitle ">About Me</span>
        <h2 className="text-center">Skills & Experience</h2>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          {/* Skill Icons */}
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-3 row-cols-xl-4  text-center">
            {tags.map((tag) => (
              <div key={tag._id}>
                <div className="circle-icon ">
                  <Image
                    src={tag.image}
                    width="100"
                    height="100"
                    layout="responsive"
                    objectFit="scale-down"
                    alt="skill icon"
                    quality={5}
                    className="p-4"
                  />
                </div>
                <h3 className="icon-title mb-4 mb-sm-5">{tag.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          {/* Bio and History */}
          <p>I&apos;m a self-driven, team-oriented software engineer based in Tokyo.</p>
          <p>
            I am fascinated with web technology and on how it can be utilized to solve issues for
            businesses and create value.
          </p>
          <p>
            I am currently focused on building websites and web applications with a Jamstack
            architecture, utilizing NextJS, Netlify, and various headless CMS such as SanityIO and
            Supabase to power the backend.
          </p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table caption-top">
                  <caption>History At a Glance</caption>
                  <tbody>
                    <tr>
                      <th scope="row">Work Experience</th>
                      <td>
                        Software Engineer
                        <br />
                        Beams Inc., Tokyo (2016-2021)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Education</th>
                      <td>
                        BA Mgmt. Information Systems
                        <br />
                        Western Washington University
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Certifications</th>
                      <td>
                        Ruby on Rails Bootcamp 2021
                        <br />
                        Le Wagon - Tokyo (2021)
                        <br />
                        <Link href="/lewagon-certificate.pdf">Certificate</Link>
                        <br />
                        <br />
                        Google Cloud Essentials
                        <br />
                        <Link href="https://www.cloudskillsboost.google/public_profiles/e6ee1b1f-fdc4-4ef4-a99f-95176b203d30">
                          Google Skill badge
                        </Link>
                        <br />
                        <br />
                        Serverless Firebase Development
                        <br />
                        <Link href="https://www.cloudskillsboost.google/public_profiles/e6ee1b1f-fdc4-4ef4-a99f-95176b203d30">
                          Google Skill badge
                        </Link>
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
  tags: PropTypes.arrayOf(PropTypes.object),
}
