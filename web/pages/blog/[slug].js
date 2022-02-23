// display individual blog post
import groq from 'groq'
import client from '../../client'

const Blog = (props) => {
  const { title, author, categories } = props.post
  return (
    <article>
      <h1>{title}</h1>
      <div>By {author}</div>
      <div>{categories}</div>
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
  "categories": categories[]->title
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
