// display individual blog post
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import PropTypes from "prop-types"

import client from '../../client'
import getSanityImgUrl from '../../utils/getSanityImgUrl'

const ptComponents = {
  types: {
    figure: ({value}) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={getSanityImgUrl(value).width(320).height(240).fit('max').auto('format').url()}
        />
      )
    }
  }
}

const Post = (props) => {
  const post = props.post
  return (
    <article>
      <h1>{post?.title}</h1>
      <div>By {post?.author}</div>

      {post?.categories && (
        <ul>
          {post?.categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      )}

      {post?.authorImg && (
        <div>
          <img src={getSanityImgUrl(post?.authorImg).width(150).url()} alt='author'/>
        </div>
      )}

    {post?.content && (
      <PortableText
        value={post.content}
        components={ptComponents}
      />
      )}
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
  authorImg: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.arrayOf(PropTypes.object)
};

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
  const {slug = ""} = context.params
  const post = await client.fetch(query, {slug})
  return {
    props: {
      post
    }
  }
}

export default Post
