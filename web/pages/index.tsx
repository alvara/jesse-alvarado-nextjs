import PropTypes from "prop-types"
import {ReactElement} from "react"
import client from '../client'
import groq from 'groq'

import MainLayout from '../modules/layouts/mainLayout'
import HeroHeader from '../modules/sections/HeroHeader'
import Philosophy from '../modules/sections/Philosophy'
import Portfolio from '../modules/sections/Portfolio'
import LatestPosts from '../modules/sections/LatestPosts'
import MySkills from '../modules/sections/MySkills'
// import ContactMe from '../modules/sections/ContactMe'
import Container from '../common/Container'

// index.js
export default function Index({posts}) {
  return (
    <>
      <Container wrapperClass="vh-100-w-nav" className="h-100 text-center d-flex flex-column justify-content-end"><HeroHeader /></Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center"><Philosophy /></Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center"><Portfolio /></Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center"><LatestPosts posts={posts} /></Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center"><MySkills /></Container>
      {/* <Container wrapperClass="vh-100" className="h-100"><ContactMe /></Container> */}
    </>
  )
}

// Get the main template for standard pages
Index.getLayout = function getLayout(page: ReactElement) {
  
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

Index.propTypes = {
  posts : PropTypes.arrayOf(PropTypes.object),
}

export async function getStaticProps() {
  // query for blog posts 
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

  // query for list of all portfolio categories



  return {
    props: {
      posts
    }
  }
}
