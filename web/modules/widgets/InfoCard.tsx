import Image from 'next/image'
import React from 'react'

export default function InfoCard() {
  return (
    <div className="infoCard text-start m-3">
      <Image src="https://via.placeholder.com/300x300" width="250" height="250" layout="responsive" alt="test" className="mb-4"/>
      <h6>Web Designer</h6>
      <p>I focus on the end result first, building up to an MVP through clear specifications and an iterative, agile workflow.</p>
    </div>
  )
}
