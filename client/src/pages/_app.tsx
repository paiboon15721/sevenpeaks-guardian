import { ChakraProvider, ColorModeScript } from '@chakra-ui/core'
import { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/layout'

import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
