// main layout for all pages
import PropTypes from "prop-types"

import Navbar from '../../common/navbar'
import Footer from '../../common/footer'

export default function MainLayout({children}) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
