import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function Portfolio() {
  return (
    <div id="portfolio" className="h-100 text-center d-flex flex-column justify-content-center">
    <h1>Some <strong>projects</strong>  I&apos;ve worked on</h1>
    <div className="row">
      <div className="col-md-3"><InfoCard /></div>
      <div className="col-md-3"><InfoCard /></div>
      <div className="col-md-3"><InfoCard /></div>
      <div className="col-md-3"><InfoCard /></div>
    </div>
  </div>
  )
}
