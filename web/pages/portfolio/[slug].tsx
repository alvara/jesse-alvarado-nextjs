// display individual blog post
import {ReactElement} from 'react'
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import PropTypes from "prop-types"
import Head from 'next/head'

import MainLayout from "../../modules/layouts/mainLayout"
import client from '../../client'
import getSanityImgUrl from '../../utils/getSanityImgUrl'
import Container from '../../common/Container'
import HeroHeader from '../../modules/sections/HeroHeader'

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
          src={getSanityImgUrl(value).width(320).height(240).fit('max').auto('format').url()}
          />
          )
        }
      }
}

// Declare Portfolio Item Component
const PortfolioItem = (props) => {
  const post = props.post
  return (
    <>

      <Head>
        {post?.title && (
         <title>{post.title}</title>
        )}

        {/* TODO: add description to schema and insert here for each post */}
      </Head>

      <Container wrapperClass="vh-100-w-nav" className="h-100 d-flex align-items-center justify-content-center text-center">
        <HeroHeader 
          img={post?.mainImage} 
          title={post?.title}
          subtitle={post?.summary}
          tags={post?.tags}
        />
      </Container>

      <Container wrapperClass=''>
        <div className="row">
          <div className="mx-auto col-8">
          {post?.content && (
            <PortableText
            value={post.content}
            components={ptComponents}
            />
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

// Load Page in Layout
PortfolioItem.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

// Define Proptypes for PortfolioItem Component
PortfolioItem.propTypes = {
  post: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object)
};

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
  const {slug = ""} = context.params
  const post = await client.fetch(query, {slug})
  return {
    props: {
      post
    }
  }
}

export default PortfolioItem
