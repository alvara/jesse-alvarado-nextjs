// main layout for all pages
import PropTypes from "prop-types"

import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Head from "next/head";

export default function MainLayout({children}) {
  return (
    <>
      <Head>
      <title>Home | Jesse Alvarado</title>
      </Head>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
