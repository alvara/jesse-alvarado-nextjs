import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function Philosophy() {
  return (
    <div className="row ">
      <h1 className="text-center mt-5">My <strong>philosophy</strong><br />When I develop <strong>applications</strong></h1>
        <div className="col-md-3"><InfoCard /></div>
        <div className="col-md-3"><InfoCard /></div>
        <div className="col-md-3"><InfoCard /></div>
        <div className="col-md-3"><InfoCard /></div>
      </div>
  )
}
