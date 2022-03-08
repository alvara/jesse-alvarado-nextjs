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
import Image from "next/image"

// index.js
export default function Index({posts, portfolio, tags, showcaseTags}) {

  return (
    <>
      <Container wrapperClass="vh-100-w-nav pb-0" className="h-100 text-center d-flex flex-column justify-content-end">
        <HeroHeader 
          img={'/220308-portrait.png'} 
          preTitle={'Hello, I\'m Jesse'}
          title={'I build modern web applications to empower businesses.'}
        />
        <div className="bg-image-wrapper">        
          <Image src={'/bg-wood.png'} layout="fill" objectFit={'contain'} alt="Background" quality={50} priority={true} />
        </div>

      </Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center bg-2"><Philosophy /></Container>
      <Container wrapperClass="min-h-100"><Portfolio portfolio={portfolio} tags={tags}/></Container>
      <Container wrapperClass="d-flex align-items-center bg-2"><LatestPosts posts={posts} /></Container>
      <Container wrapperClass="min-h-100 d-flex align-items-center"><MySkills tags={showcaseTags}/></Container>
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
  posts: PropTypes.arrayOf(PropTypes.object),
  portfolio: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.object),
  showcaseTags: PropTypes.arrayOf(PropTypes.object),
}

export async function getStaticProps() {
  // query for blog posts 
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()][0..2]{
      "author": author->name,
      "categories": categories[]->{
        _id,
        title,
        slug
      },
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

  // Query For Portfolio Tags
  const portfolio = await client.fetch(groq`
    *[_type == "portfolio"]{
      _id,
      title,
      summary,
      slug,
      "mainImage": mainImage.asset->url,
      "tags": tag[]->{
        title,
        slug,
        _id,
        showcase,
        "image" : image.asset->url
      },
      "tagList": tag[]->slug
    } | order(publishedAt desc)
  `)

  // Count number of instances of a tag and store it
  const tagsObj = {}
  portfolio.forEach(item => {
    item.tags.forEach(tag => {
      // if no tag exists yet, add it
      if(!tagsObj[tag.slug]){
        tagsObj[tag.slug] = {
          title: tag.title,
          slug: tag.slug,
          _id: tag._id,
          showcase: tag.showcase,
          image: tag.image,
          count: 1
        }
      // tag already exists, increment counter
      } 
      else {
        tagsObj[tag.slug].count += 1
      }
    })
  })

  // convert object of tags to array
  let tags = []
  Object.entries(tagsObj).forEach(
    ([key,value]) => tags.push(value)
  )

  // sort tags by slug
  tags = tags.sort((a,b) => (a.slug > b.slug) ? 1 : ((b.slug > a.slug) ? -1 : 0))

  // Get tags that are to be showcased in the skills&experience section
  const showcaseTags = tags.filter((tag)=>(tag.showcase === true))

  return {
    props: {
      posts,
      portfolio,
      tags,
      showcaseTags
    }
  }
}
