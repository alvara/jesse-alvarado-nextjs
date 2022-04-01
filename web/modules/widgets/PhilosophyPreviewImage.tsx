import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

PhilosophyPreviewImage.propTypes = {
  img: PropTypes.string,
  imgClassName: PropTypes.string,
}

export default function PhilosophyPreviewImage({img, imgClassName}) {
  return (
    <div className={`philosophy-image-preview-wrapper ${imgClassName}`}>
      <Image
        src={img}
        layout="responsive"
        width="125"
        height="125"
        sizes="125px"
        objectFit={'cover'}
        alt="Blog Preview"
        quality={25}
        priority={true}
        placeholder="blur"
        blurDataURL={img}
      />
    </div>
  )
}
