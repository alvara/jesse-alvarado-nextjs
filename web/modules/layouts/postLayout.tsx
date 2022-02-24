// Layout for individual blog posts
import PropTypes from "prop-types"

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

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
