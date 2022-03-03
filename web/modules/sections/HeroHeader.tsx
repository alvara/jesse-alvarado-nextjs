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
         <p>{new Date(date).toDateString()}</p>
         )}

        {tags.length > 0 && tags.map((tag)=>(
          <span className='pill mini' key={tag}>{tag}</span>
        ))}

        {img && (
          <div className="image-container d-flex justify-content-center mt-4 rounded" >
            <Image 
              src={img} 
              layout="intrinsic" 
              width="600" 
              height="300"
              objectFit={'contain'}
              alt="Header"
              quality={50}
              priority={true}
              className="image"
            />
          </div>
        )}
      </div>
      <div className="col-md-3"></div>
    </div>
  )
}

// Define Proptypes for PortfolioItem Component
HeroHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
};
