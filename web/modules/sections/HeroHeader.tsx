import Image from 'next/image'
import React from 'react'

export default function HeroHeader() {
  return (
    <div className="h-100 text-center d-flex flex-column justify-content-end">
      <h1>Hi, Im Jesse</h1>
      <p>I build modern web applications with React, NextJS and Netlify.</p>
      <div className="mx-auto d-flex align-items-end mt-5" >
      <Image src="https://via.placeholder.com/350x150" layout="fixed" width="350" height="400" alt="test"/>
      </div>
    </div>
  )
}
