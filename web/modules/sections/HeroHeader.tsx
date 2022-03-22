import React from 'react'
import PropTypes from 'prop-types'
import HeroImage from '../widgets/HeroImage'
// import BlogImage from '../widgets/BlogImage'

// Define Proptypes for PortfolioItem Component
HeroHeader.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  imgType: PropTypes.string,
  orientation: PropTypes.string
}

export default function HeroHeader({preTitle, title, subtitle, date, tags = [], img, imgType, orientation = 'portrait'}) {
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
        
        {img && imgType === 'hero' && (
            <HeroImage img={img} />
          )}
      </div>
    </div>
  )
}

