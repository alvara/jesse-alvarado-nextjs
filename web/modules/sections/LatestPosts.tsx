import React from 'react'
import PropTypes from "prop-types"
import InfoCard from '../widgets/InfoCard'
import Link from 'next/link'

export default function LatestPosts({posts}) {
  return (
    <div className='text-center'>
      <h1>Latest Articles</h1>
      <div className='row'>
      {posts.length > 0 && posts.map(
        ({_id, title = '', slug, publishedAt = '', mainImage}) =>
           (
            <div className='col-lg-4'  key={_id} >
              <InfoCard 
                mainImage={mainImage}
                href={"/blog/[slug]"}
                as={`/blog/${slug.current}`} 
                title={title} 
                subtitle={new Date(publishedAt).toDateString()}
              />
            </div>
          )
        )}
      </div>
      <Link href={'/blog'}><button>Read More Articles</button></Link>
    </div>
  )
}

LatestPosts.propTypes = {
  posts : PropTypes.arrayOf(PropTypes.object)
}
