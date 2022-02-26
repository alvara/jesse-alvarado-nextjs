import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function Philosophy() {
  return (
    <div className="h-100 text-center d-flex flex-column justify-content-center">
      <h1>My <strong>philosophy</strong><br />When I develop <strong>applications</strong></h1>
      <div className="row">
        <div className="col-md-3"><InfoCard /></div>
        <div className="col-md-3"><InfoCard /></div>
        <div className="col-md-3"><InfoCard /></div>
        <div className="col-md-3"><InfoCard /></div>
      </div>
    </div>
  )
}
