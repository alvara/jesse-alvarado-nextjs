// display individual blog post
import {ReactElement} from 'react'
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import PropTypes from 'prop-types'

import MainLayout from '../../modules/layouts/mainLayout'
import client from '../../client'
import getSanityImgUrl from '../../utils/getSanityImgUrl'
import Head from 'next/head'
import Container from '../../common/Container'
import Header from '../../modules/sections/Header'

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
    },
  },
}

const Post = (props) => {
  const post = props.post
  return (
    <>
      <Head>{post?.title && <title>{post.title}</title>}</Head>

      <Container
        wrapperClass="pb-0"
        className="h-100 d-flex align-items-center justify-content-center text-center"
      >
        <Header
          img={post?.mainImage}
          imgType="blog"
          title={post?.title}
          subtitle={post?.summary}
          date={post?.publishedAt}
          tags={post?.tags}
        />
      </Container>

      <Container wrapperClass="portableText">
        <div className="row">
          <div className="col-md-12 offset-lg-2 col-lg-8">
            {post?.content && <PortableText value={post.content} components={ptComponents} />}
          </div>
        </div>
      </Container>
    </>
  )
}

// Load Page in Layout
Post.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

// Define Proptypes for Post Component
Post.propTypes = {
  post: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
}

// Define path for SSG pages '/blog/[slug]'.
export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

// Query for current post item
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "author": author->name,
  "categories": categories[]->title,
  "authorImg": author->image,
  content,  
  "mainImage": mainImage.asset->url,
  "tags": categories[]->title,
  publishedAt,
}`

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

export default Post
