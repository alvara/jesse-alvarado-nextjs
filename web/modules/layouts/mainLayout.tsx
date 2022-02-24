// main layout for all pages
import PropTypes from "prop-types"

import Navbar from '../../common/navbar'
import Footer from '../../common/footer'

export default function MainLayout({children}) {
  return (
    <>
      <Navbar/>
      From Main layout!
      <main>{children}</main>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
