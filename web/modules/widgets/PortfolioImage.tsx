import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

PortfolioImage.propTypes = {
  img: PropTypes.string,
}

export default function PortfolioImage({img}) {
  return (
    <div className="portfolio-image-wrapper mt-4">
      <Image
        src={img}
        layout="responsive"
        width="650"
        height="350"
        sizes="600px"
        objectFit={'cover'}
        alt="Portfolio Preview"
        quality={50}
        priority={true}
      />
    </div>
  )
}
