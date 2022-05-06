import type {ReactElement} from 'react'
import MainLayout from '../modules/layouts/mainLayout'
import Container from '../common/Container'
import Header from '../modules/sections/Header'

// view all blog posts
const Custom404 = () => {
  return (
    <div>
      <Container wrapperClass="min-h-100 d-flex align-items-center" className="text-center">
        <Header
          title={'404'}
          subtitle={'Oops! Looks like that page does not exist or was moved.'}
        />
      </Container>
    </div>
  )
}

// Get the main template for standard pages
Custom404.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Custom404
