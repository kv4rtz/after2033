import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/head/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/head/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/head/favicon-16x16.png" />
          <link rel="manifest" href="/head/site.webmanifest" />
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-straight/css/uicons-solid-straight.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
