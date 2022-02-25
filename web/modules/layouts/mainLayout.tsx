// main layout for all pages
import PropTypes from "prop-types"

import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

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
