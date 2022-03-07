import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function InfoCard({href = '/', as = '', title = '', subtitle = '', content, mainImage = 'https://via.placeholder.com/300x300', className, tags = [], height = 250}) {
  const disableLink = href !== '/' ? '' : 'disable-link'
  return (
    <Link href={href} as={as}>
      <a className={`infoCard-wrapper ${disableLink}`}>
      <div className={`infoCard text-start m-3  ${className}`}>
        <Image src={mainImage} width="250" height={height} layout="responsive" objectFit='scale-down' alt="test" className="" quality={30} priority/>
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

InfoCard.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  mainImage: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  tags : PropTypes.arrayOf(PropTypes.object)
}
