import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

HeroImage.propTypes = {
  img: PropTypes.string,
}

export default function HeroImage({img}) {
  return (
    <div className='hero-image-wrapper bg-transparent'>
      <Image  
        src={img}  
        layout="responsive"
        width={560}
        height={550}
        sizes="500px"
        objectFit={'scale-down'} 
        alt="Headshot" 
        quality={60} 
        priority={true} 
        unoptimized={true}   
        className='bg-transparent'
      />
    </div>
  )
}
