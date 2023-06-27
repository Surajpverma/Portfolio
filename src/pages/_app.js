import '@/styles/globals.css'

// import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./faviconDark.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/faviconLight.png"
          media="(prefers-color-scheme: light)"
        />
      </Head>
      <main className={`bg-light dark:bg-dark w-full min-h-screen bgp`}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}


{/*  */ }