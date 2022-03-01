import type {ReactElement} from 'react'
import Link from 'next/link'
import groq from 'groq'
import PropTypes from "prop-types"

import client from '../client'
import MainLayout from '../modules/layouts/mainLayout'
import Container from '../common/Container'
import HeroHeader from '../modules/sections/HeroHeader'
import InfoCard from '../modules/widgets/InfoCard'


// view all blog posts
const Blog = ({posts}) => {

  return (
    <div>
      <Container wrapperClass="vh-100-w-nav" className="h-100 text-center">
      <HeroHeader 
        title={'Blog'}
        subtitle={'A collection of my written articles'}
      />

<div className='text-center'>
      <div className='row'>
      {posts.length > 0 && posts.map(
        ({_id, title = '', slug, publishedAt = '', mainImage, categories}) =>
           (
            <div className='col-lg-4'  key={_id} >
              <InfoCard 
                className='postCard'
                mainImage={mainImage}
                href={"/blog/[slug]"}
                as={`/blog/${slug.current}`} 
                title={title} 
                subtitle={new Date(publishedAt).toDateString()}
                tags={categories}
                height={140}
              />
            </div>
          )
        )}
      </div>
    </div>

    </Container>  
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
  *[_type == "post" && publishedAt < now()][0..2]{
    "author": author->name,
    "categories": categories[]->title,
    content,
    publishedAt,
    slug,
    title,
    _createdAt,
    _id,
    "mainImage": mainImage.asset->url,
    _rev,
    _type,
    _updateAt,
    "authorImg": author->image,
  } | order(publishedAt desc)
`)
  return {
    props: {
      posts
    }
  }
}

export default Blog;
