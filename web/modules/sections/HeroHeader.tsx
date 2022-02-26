import Image from 'next/image'
import React from 'react'

export default function HeroHeader() {
  return (
    <div className="row">
      <div className="col-sm-8">col-sm-8</div>
      <div className="col-sm-4">
        <Image src="https://via.placeholder.com/350x150" layout="fixed" width="350" height="150" />

      </div>
    </div>
  )
}
