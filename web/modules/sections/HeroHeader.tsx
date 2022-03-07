import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'

export default function HeroHeader({preTitle, title, subtitle, date, tags = [], img, orientation = 'portrait'}) {
  return (
    <div className="row">
      <div className="mx-auto col-10">

       {preTitle && (
         <span className='preTitle'>{preTitle}</span>
         )}
         
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
          <div className={`image-container d-flex justify-content-center mt-4 rounded ${orientation === 'landscape' ? 'landscape' : ''}`} >
              {orientation === 'landscape' ? (
                // landscape orientation - 
                <Image  src={img} width="800" height="500" layout="intrinsic" objectFit={'cover'} alt="Header" quality={50} priority={true} className="image"/>
                ) : (
                <Image  src={img}  layout="fill" objectFit={'scale-down'} alt="Header" quality={50} priority={true} className="image"/>
              )}
          </div>
        )}
      </div>
    </div>
  )
}

// Define Proptypes for PortfolioItem Component
HeroHeader.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  orientation: PropTypes.string
};
