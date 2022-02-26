import type {ReactElement} from 'react'
import Link from 'next/link'
import groq from 'groq'
import PropTypes from "prop-types"

import client from '../client'
import MainLayout from '../modules/layouts/mainLayout'

// view all blog posts
const Blog = ({posts}) => {

  return (
    <div>
      <p>Blog</p>

      {posts.length > 0 && posts.map(
          ({_id, title = '', slug, publishedAt = ''}) =>
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

// Get the main template for standard pages
Blog.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

Blog.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};




export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Blog;
