import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

BlogPreviewImage.propTypes = {
  img: PropTypes.string
}

export default function BlogPreviewImage({img}) {
  return (
    <div className='blog-image-preview-wrapper'>
      <Image  
        src={img} 
        layout="responsive" 
        width="300" 
        height="150" 
        sizes="300px"
        objectFit={'cover'} 
        alt="Blog Preview" 
        quality={60} 
        priority={true} 
        placeholder='blur'
        blurDataURL={img}
      />
    </div>
  )
}
