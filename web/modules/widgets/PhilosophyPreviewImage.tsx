import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

PhilosophyPreviewImage.propTypes = {
  img: PropTypes.string
}

export default function PhilosophyPreviewImage({img}) {
  return (
    <div className='philosophy-image-preview-wrapper'>
      <Image  
        src={img} 
        layout="responsive" 
        width="125" 
        height="125" 
        sizes="125px"
        objectFit={'cover'} 
        alt="Blog Preview" 
        quality={30} 
        priority={true} 
        placeholder='blur'
        blurDataURL={img}
      />
    </div>
  )
}
