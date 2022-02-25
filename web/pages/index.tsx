import type {ReactElement} from 'react'
import Link from 'next/link'
import groq from 'groq'
import PropTypes from "prop-types"
import client from '../client'

import MainLayout from '../modules/layouts/mainLayout'
import HeroHeader from '../modules/sections/HeroHeader'
import Philosophy from '../modules/sections/Philosophy'
import Portfolio from '../modules/sections/Portfolio'
import LatestPosts from '../modules/sections/LatestPosts'
import MySkills from '../modules/sections/MySkills'
import ContactMe from '../modules/sections/ContactMe'

// index.js
export default function Index({posts}) {
  return (
    <>
      <HeroHeader />
      <Philosophy />
      <Portfolio />
      <LatestPosts />
      <MySkills />
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
      <ContactMe />
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
