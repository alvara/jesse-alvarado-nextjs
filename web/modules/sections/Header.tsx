import React from 'react'
import PropTypes from 'prop-types'
import BlogImage from '../widgets/BlogImage'
import PortfolioImage from '../widgets/PortfolioImage'
// import BlogImage from '../widgets/BlogImage'

// Define Proptypes for PortfolioItem Component
Header.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  imgType: PropTypes.string,
}

export default function Header({preTitle, title, subtitle, date, tags = [], img, imgType}) {
  return (
    <div className="row">
      <div className="offset-md-1 col-12 offset-sm-1 col-sm-10">
        {preTitle && <span className="preTitle">{preTitle}</span>}

        {title && <h1>{title}</h1>}

        {subtitle && <p>{subtitle}</p>}

        {date && <p>{new Date(date).toDateString()}</p>}

        {tags.length > 0 &&
          tags.map((tag) => (
            <span className="pill mini" key={tag}>
              {tag}
            </span>
          ))}

        {/* Choose correct image component to display */}
        {img && imgType === 'blog' && <BlogImage img={img} />}
        {img && imgType === 'portfolio' && <PortfolioImage img={img} />}
      </div>
    </div>
  )
}
