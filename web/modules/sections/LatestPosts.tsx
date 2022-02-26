import React from 'react'
import PropTypes from "prop-types"
import InfoCard from '../widgets/InfoCard'

export default function LatestPosts({posts}) {
  return (
    <div>
      <h3>LatestPosts</h3>
      {posts.length > 0 && posts.map(
        ({_id, title = '', slug, publishedAt = ''}) =>
          slug && (
            <InfoCard 
              key={_id} 
              href={"/blog/[slug]"}
              as={`/blog/${slug.current}`} 
              title={title} 
              subtitle={new Date(publishedAt).toDateString()}
            />
          )
        )}
    </div>
  )
}

LatestPosts.propTypes = {
  posts : PropTypes.arrayOf(PropTypes.object)
}
