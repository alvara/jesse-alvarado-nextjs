import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'

export default function HeroHeader({title, subtitle, date, tags = [], img}) {
  return (
    <div className="row">
      <div className="col-md-12">
       {title && (
         <h1>{title}</h1>
         )}
         
       {subtitle && (
         <p>{subtitle}</p>
         )}

       {date && (
         <p>{date}</p>
         )}

        {tags.length > 0 && tags.map((tag)=>(
          <span className='pill mini' key={tag}>{tag}</span>
        ))}

        {img && (
          <div className="d-flex justify-content-center mt-5" >
            <Image 
              src={img} 
              layout="fixed" 
              width="900" 
              height="500vh" 
              sizes="50vh" 
              objectFit='scale-down' 
              alt="Primary Image"
              className="rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

// Define Proptypes for PortfolioItem Component
HeroHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string
};
