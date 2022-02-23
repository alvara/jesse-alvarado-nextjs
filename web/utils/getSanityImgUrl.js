import imageUrlBuilder from '@sanity/image-url'

export default function getSanityImgUrl(client, source) {
  return imageUrlBuilder(client).image(source)
}
