// pages/_app.tsx
import Head from 'next/head'
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import '../styles/global.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>Jesse Alvarado</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* TODO: Add favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Personal Portfolio of Jesse Alvarado" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
