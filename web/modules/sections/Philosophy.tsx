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
            subtitle='I focus on the end result first, building prioritized features with an iterative approach to quickly deliver.'
            img='/result-oriented.jpg'
            imgType='philosophy'
            className='text-center text-sm-start'
            imgClassName='mx-auto mx-sm-0'
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <InfoCard 
            title='Team Player'
            subtitle='I use clear communication, well documented code, and and an open mindset to make working with teams a productive experience.'
            img='/team-player.jpg'
            imgType='philosophy'
            className='text-center text-sm-start'
            imgClassName='mx-auto mx-sm-0'
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <InfoCard 
            title='Clean Design'
            subtitle='I am passionate about creating beautiful web apps that users can easily understand and enjoy.'
            img='/clean-design.jpg'
            imgType='philosophy'
            className='text-center text-sm-start'
            imgClassName='mx-auto mx-sm-0'
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <InfoCard 
            title='Modern Stack'
            subtitle='I am never afraid to utilize new frameworks and tools to take advantage of the latest advancements in technology.'
            img='/modern-stack.jpg'
            imgType='philosophy'
            className='text-center text-sm-start'
            imgClassName='mx-auto mx-sm-0'
         />
        </div>
      </div>
  )
}
