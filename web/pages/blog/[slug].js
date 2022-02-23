// display individual blog post
import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter()
  
  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  )
}

export default Blog