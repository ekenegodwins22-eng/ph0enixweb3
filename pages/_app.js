
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <meta name="keywords" content="PH0ENIX_WEB3, community manager, web3 ambassador, web3 community growth, discord moderator, web3 strategy, blockchain community, telegram growth" />
        <meta name="author" content="PH0ENIX_WEB3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ph0enixweb3.vercel.app/" />
        <meta property="og:title" content="PH0ENIX_WEB3 | Web3 Community Builder & Ambassador" />
        <meta property="og:description" content="Empowering projects to grow loyal Web3 communities through strategy, engagement, and innovation." />
        <meta property="og:image" content="https://i.ibb.co/7tNbF3k3/file-000000000f3461f7b9667cad34755326.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ph0enixweb3.vercel.app/" />
        <meta name="twitter:title" content="PH0ENIX_WEB3 | Web3 Community Builder & Ambassador" />
        <meta name="twitter:description" content="Building and managing thriving Web3 communities — strategy, growth, and engagement." />
        <meta name="twitter:image" content="https://i.ibb.co/7tNbF3k3/file-000000000f3461f7b9667cad34755326.png" />
        <meta name="twitter:creator" content="@ph0enix_web3" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "PH0ENIX_WEB3",
            "url": "https://ph0enixweb3.vercel.app/",
            "sameAs": [
              "https://x.com/ph0enix_web3",
              "https://t.me/ph0enix_web"
            ],
            "jobTitle": "Web3 Community Growth Ambassador",
            "worksFor": {
              "@type": "Organization",
              "name": "PH0ENIXWEB3"
            }
          })
        }} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
