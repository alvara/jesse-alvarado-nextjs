// pages/_app.tsx

import {ReactElement, ReactNode, useEffect} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import '../styles/styles.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  
  useEffect(() => {
      // import bootstrap js for menu collapse
      import("bootstrap/dist/js/bootstrap");
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
