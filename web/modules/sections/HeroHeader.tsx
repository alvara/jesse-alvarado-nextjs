import Image from 'next/image'
import React from 'react'

export default function HeroHeader() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Hi, Im Jesse</h1>
       <p>I build modern web applications with React, NextJS and Netlify.</p>
        <div className="d-flex justify-content-center mt-5" >
          <Image src="https://via.placeholder.com/350x150" layout="fixed" width="350" height="400" alt="test"/>
        </div>
      </div>
    </div>
  )
}
