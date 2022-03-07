import React from 'react'
import InfoCard from '../widgets/InfoCard'

export default function Philosophy() {
  return (
    <div className="row">
      <span className="text-center preTitle">My Philosophy</span>
      <h2 className="text-center">How I develop Applications</h2>
        <div className="col-md-6 col-lg-3">
          <InfoCard 
            title='Result Oriented'
            content='I focus on the end result first, building prioritized features with an iterative approach to quickly deliver.'
            mainImage='/result-oriented.jpg'
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <InfoCard 
            title='Team Player'
            content='I use clear communication, well documented code, and and an open mindset to make working with teams a productive experience.'
            mainImage='/team-player.jpg'
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <InfoCard 
            title='Clean Design'
            content='I am passionate about creating beautiful web apps that users can easily understand and enjoy.'
            mainImage='/clean-design.jpg'
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <InfoCard 
            title='Modern Stack'
            content='I am never afraid to utilize new frameworks and tools to take advantage of the latest advancements in technology.'
            mainImage='/modern-stack.jpg'
         />
        </div>
      </div>
  )
}
