import Link from 'next/link'
import groq from 'groq'
import PropTypes from "prop-types"
import client from '../client'

// index.js
const Index = ({posts}) => {

  return (
    <div>
      <p>Welcome!</p>

      {posts.length > 0 && posts.map(
          ({_id, title = '', slug = '', publishedAt = ''}) =>
            slug && (
              <li key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
    </div>
  )
}

Index.propTypes = {
  posts : PropTypes.object
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()][0..2] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Index;
