import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }){
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070617" />
        <link rel="icon" href="/favicon.svg" />
        <title>ph0enix — Web3</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
