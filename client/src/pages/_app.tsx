import { ChakraProvider, ColorModeScript } from '@chakra-ui/core'
import App, { AppContext, AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/layout'
import {
  ArticlesRoot,
  GuardianResponse,
} from '../repositories/createGuardianApis'
import { guardianApis } from '../appContext'
import { ArticlesProvider } from '../stores/articles'

import theme from '../theme'

function MyApp({
  Component,
  pageProps,
  articlesResponse,
}: AppProps & { articlesResponse: GuardianResponse<ArticlesRoot> }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeScript />
      <Layout>
        <ArticlesProvider
          articlesResponse={articlesResponse}
          orderBy="newest"
          q=""
        >
          <Component {...pageProps} />
        </ArticlesProvider>
      </Layout>
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const articlesResponse = await guardianApis.getArticles()
  return { ...appProps, articlesResponse }
}

export default MyApp
