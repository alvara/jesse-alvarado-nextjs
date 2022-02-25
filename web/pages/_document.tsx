
// pages/_document.js

import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Font */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:300&display=optional" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
