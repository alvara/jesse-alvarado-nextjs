// display individual blog post
import groq from 'groq'
import {PortableText} from '@portabletext/react'

import client from '../../client'
import getSanityImgUrl from '../../utils/getSanityImgUrl'


const ptComponents = {
  types: {
    figure: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={getSanityImgUrl(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}

const Blog = (props) => {
  const { title, author, authorImg, categories, content } = props.post
  return (
    <article>
      <h1>{title}</h1>
      <div>By {author}</div>

      {categories && (
        <ul>
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}

      {authorImg && (
        <div>
          <img src={getSanityImgUrl(authorImg).width(150).url()}/>
        </div>
      )}

      <PortableText
        value={content}
        components={ptComponents}
      />
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

// Create query from Sanity
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name,
  "categories": categories[]->title,
  "authorImg": author->image,
  content
}`

export async function getStaticProps(context) {
  // default empty slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}

export default Blog
