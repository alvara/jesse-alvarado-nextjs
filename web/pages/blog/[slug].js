// display individual blog post
import groq from 'groq'
import client from '../../client'
import getSanityImgPath from '../../utils/getSanityImgUrl'

const Blog = (props) => {
  const { title, author, authorImg, categories } = props.post
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
          <img src={getSanityImgPath(authorImg).width(150).url()}/>
        </div>
      )}
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
  "authorImg": author->image
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
