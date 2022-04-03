import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

HeroImage.propTypes = {
  img: PropTypes.string,
}

export default function HeroImage({img}) {
  return (
    <div className="hero-image-wrapper">
      <Image
        src={img}
        layout="intrinsic"
        width={560}
        height={550}
        objectFit={'scale-down'}
        alt="Headshot"
        quality={50}
        priority={true}
        unoptimized={true}
      />
    </div>
  )
}
