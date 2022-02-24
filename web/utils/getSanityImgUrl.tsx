import imageUrlBuilder from '@sanity/image-url'

import client from '../client'

// Get the image url from a Sanity query prop with image type
export default function getSanityImgUrl(source) {
  return imageUrlBuilder(client).image(source)
}
