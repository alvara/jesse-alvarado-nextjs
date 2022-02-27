import Image from 'next/image'
import React from 'react'

export default function HeroHeader() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Hi, Im Jesse</h1>
       <p>I build modern web applications and MVPs that are optimized in design and performance.</p>
        <div className="d-flex justify-content-center mt-5" >
          <Image src="/personal-pic.png" layout="fixed" width="350" height="500vh" sizes="50vh" alt="test"/>
        </div>
      </div>
    </div>
  )
}
