import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })

  Router.events.on('routeChangeStart', () => NProgress.start())

  

  return (
    <>
    <Head>

    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>  
    </>
  )
}

export default MyApp
