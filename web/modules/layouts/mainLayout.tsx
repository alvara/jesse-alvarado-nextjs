// main layout for all pages

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
