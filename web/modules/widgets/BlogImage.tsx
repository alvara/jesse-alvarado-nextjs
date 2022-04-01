import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

BlogImage.propTypes = {
  img: PropTypes.string,
}

export default function BlogImage({img}) {
  return (
    <div className="blog-image-wrapper mt-4">
      <Image
        src={img}
        layout="responsive"
        width="700"
        height="400"
        sizes="650px"
        objectFit={'cover'}
        alt="Blog Preview"
        quality={50}
        priority={true}
      />
    </div>
  )
}
