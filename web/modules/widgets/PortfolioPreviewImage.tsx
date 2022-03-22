import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

PortfolioPreviewImage.propTypes = {
  img: PropTypes.string
}

export default function PortfolioPreviewImage({img}) {
  return (
    <div className='portfolio-image-preview-wrapper mt-4'>
      <Image  
        src={img} 
        layout="responsive" 
        width="300" 
        height="200" 
        sizes="300px"
        objectFit={'contain'} 
        alt="Portfolio Preview" 
        quality={30} 
        priority={true} 
        placeholder='blur'
        blurDataURL={img}
      />
    </div>
  )
}
