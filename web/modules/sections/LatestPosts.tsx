import React from 'react'
import PropTypes from "prop-types"
import InfoCard from '../widgets/InfoCard'

export default function LatestPosts({posts}) {
  return (
    <div>
      <h1 className='text-center'>Latest Articles</h1>
      <div className='row'>
      {posts.length > 0 && posts.map(
        ({_id, title = '', slug, publishedAt = ''}) =>
          slug && (
            <div className='col-lg-4'  key={_id} >
              <InfoCard 
                href={"/blog/[slug]"}
                as={`/blog/${slug.current}`} 
                title={title} 
                subtitle={new Date(publishedAt).toDateString()}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}

LatestPosts.propTypes = {
  posts : PropTypes.arrayOf(PropTypes.object)
}
