import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function Philosophy() {
  return (
    <div className="row ">
      <h1 className="text-center mt-5">My <strong>philosophy</strong><br />When I develop <strong>applications</strong></h1>
        <div className="col-md-3">
          <InfoCard 
            title='Result Oriented'
            content='I focus on the end result first, building prioritized features with an iterative approach to quickly deliver a MVP.'
          />
        </div>
        <div className="col-md-3">
          <InfoCard 
            title='Team Player'
            content='I use clear communication, well documented code, and and an open mindset to make working with teams a productive experience.'
          />
        </div>
        <div className="col-md-3">
          <InfoCard 
            title='Clean Design'
            content='I am passionate about creating beautiful web apps that users can easily understand and enjoy.'
          />
        </div>
        <div className="col-md-3">
          <InfoCard 
            title='Modern Stack'
            content='I am never afraid to utilize new frameworks and tools to take advantage of the latest advancements in technology.'
          />
        </div>
      </div>
  )
}
