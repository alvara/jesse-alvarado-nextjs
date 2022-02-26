import React from 'react'
import Link from 'next/link'
import PropTypes from "prop-types"

export default function LatestPosts({posts}) {
  return (
    <div>
      <h3>LatestPosts</h3>
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

LatestPosts.propTypes = {
  posts : PropTypes.arrayOf(PropTypes.object)
}
