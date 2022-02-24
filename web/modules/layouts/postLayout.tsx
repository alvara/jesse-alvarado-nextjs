// Layout for individual blog posts

import Navbar from '../../common/navbar'
import Footer from '../../common/footer'

export default function PostLayout({children}) {
  return (
    <>
      <Navbar/>
      This is the post layout!
      <main>{children}</main>
      <Footer />
    </>
  )
}
