// display individual blog post
import {ReactElement} from 'react'
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import MainLayout from '../../modules/layouts/mainLayout'
import client from '../../client'
import getSanityImgUrl from '../../utils/getSanityImgUrl'
import Container from '../../common/Container'
import Header from '../../modules/sections/Header'

// Configure Portable Text
const ptComponents = {
  types: {
    figure: ({value}) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={getSanityImgUrl(value).toString()}
          className="portable-image"
        />
      )
    },
  },
}

// Declare Portfolio Item Component
const PortfolioItem = (props) => {
  const post = props.post
  return (
    <>
      <Head>{post?.title && <title>{post.title}</title>}</Head>

      <Container
        wrapperClass="pb-0"
        className="d-flex align-items-center justify-content-center text-center px-4"
      >
        <Header
          img={post?.mainImage}
          imgType="portfolio"
          title={post?.title}
          subtitle={post?.summary}
          tags={post?.tags}
        />
      </Container>

      <Container wrapperClass="portableText">
        <div className="row">
          <div className="col-12 col-sm-12 offset-lg-2 col-lg-8">
            {post?.content && <PortableText value={post.content} components={ptComponents} />}
          </div>
        </div>
      </Container>
    </>
  )
}

// Load Page in Layout
PortfolioItem.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

// Define Proptypes for PortfolioItem Component
PortfolioItem.propTypes = {
  post: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
}

// Query for current portfolio item
const query = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  title,
  "author": author->name,
  "categories": categories[]->title,
  "authorImg": author->image,
  content,
  "mainImage": mainImage.asset->url,
  "tags": tag[]->title,
  publishedAt,
  summary
}`

// Define path for SSG pages '/portfolio/[slug]'.
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "portfolio" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

//
export async function getStaticProps(context) {
  // default empty slug so that it doesn't return "undefined"
  const {slug = ''} = context.params
  const post = await client.fetch(query, {slug})
  return {
    props: {
      post,
    },
  }
}

export default PortfolioItem
