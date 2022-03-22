import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import BlogPreviewImage from './BlogPreviewImage'
import PortfolioPreviewImage from './PortfolioPreviewImage'
import PhilosophyPreviewImage from './PhilosophyPreviewImage'

InfoCard.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
  imgType: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  tags : PropTypes.arrayOf(PropTypes.object)
}

export default function InfoCard({href = '/', as = '', title = '', subtitle = '', content, img = 'https://via.placeholder.com/300x300', imgType, className, tags = [], height = 250}) {
  const disableLink = href !== '/' ? '' : 'disable-link'
  return (
    <Link href={href} as={as}>
      <a className={`infoCard-wrapper ${disableLink}`}>
      <div className={`infoCard text-start m-3  ${className}`}>
        {img && imgType === 'blog' && (
          <BlogPreviewImage img={img}/>
        )}

        {img && imgType === 'portfolio' && (
          <PortfolioPreviewImage img={img}/>
        )}

        {img && imgType === 'philosophy' && (
          <PhilosophyPreviewImage img={img}/>
        )}

        <div className='infoCard-content'>
          <h5 className='pt-3'>{title}</h5>
          <span className='subTitle'>{subtitle}</span>
          <p>{content}</p>
          {tags.length > 0 && tags.map((tag)=>(
            <span className='pill mini' key={tag._id}>{tag.title}</span>
          ))}
        </div>
      </div>
      </a>
    </Link>
  )
}

