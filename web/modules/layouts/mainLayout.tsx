// main layout for all pages
import PropTypes from "prop-types"

import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Head from "next/head";
import Container from "../../common/Container";

export default function MainLayout({children}) {
  return (
    <>
      <Head>
      <title>Home | Jesse Alvarado</title>
      </Head>
      <Navbar/>
      <main>{children}</main>
      <Container wrapperClass="bg-dark text-white pt-3 pb-0"><Footer /></Container>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
