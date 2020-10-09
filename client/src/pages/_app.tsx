import { ChakraProvider, ColorModeScript } from '@chakra-ui/core'
import App, { AppContext, AppProps } from 'next/app'
import Router from 'next/router'
import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '../components/layout'
import {
  ArticlesRoot,
  GuardianResponse,
} from '../repositories/createGuardianApis'
import { guardianApis } from '../appContext'
import { ArticlesProvider } from '../stores/articles'

import theme from '../theme'

Router.events.on('routeChangeStart', NProgress.start)
Router.events.on('routeChangeComplete', NProgress.done)
Router.events.on('routeChangeError', NProgress.done)

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
          articles={articlesResponse.response!.results}
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
