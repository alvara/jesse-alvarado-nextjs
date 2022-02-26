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
import ContactMe from '../modules/sections/ContactMe'
import Container from '../common/Container'

// index.js
export default function Index({posts}) {
  
  return (
    <>
      <Container wrapperClass="vh-100-w-nav" className="h-100 text-center d-flex flex-column justify-content-end"><HeroHeader /></Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center"><Philosophy /></Container>
      <Container wrapperClass="min-h-100 d-flex justify-content-center align-items-center"><Portfolio /></Container>
      {/* <Container wrapperClass="vh-100" className="h-100"><LatestPosts posts={posts} /></Container> */}
      {/* <Container wrapperClass="vh-100" className="h-100"><MySkills /></Container> */}
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
  posts : PropTypes.arrayOf(PropTypes.object)
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
