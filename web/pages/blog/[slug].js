// display individual blog post
import client from '../../client'

const Blog = (props) => {
  const { title = 'Missing title', author = 'Missing name' } = props.post
  return (
    <article>
      <h1>{title}</h1>
      <span>By {author}</span>
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

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
    {
      title, 
      "author": author->name
    }
  `, { slug })
  return {
    props: {
      post
    }
  }
}

export default Blog
