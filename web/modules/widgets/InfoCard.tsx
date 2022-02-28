import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function InfoCard({href = '/', as = '', title = '', subtitle = '', content, mainImage = 'https://via.placeholder.com/300x300'}) {
  
  const disableLink = href !== '/' ? '' : 'disable-link'
  
  return (
    <Link href={href} as={as}>
      <a className={`infoCard-wrapper ${disableLink}`}>
      <div className="infoCard text-start m-3 ">
        <Image src={mainImage} width="250" height="250" layout="responsive" alt="test" className=""/>
        <h5 className='pt-3'>{title}</h5>
        <h6>{subtitle}</h6>
        <p>{content}</p>
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
  mainImage: PropTypes.string
}
