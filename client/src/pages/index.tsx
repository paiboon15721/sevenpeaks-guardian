import { NextPage } from 'next'
import React from 'react'
import { Articles, GuardianResponse } from '../repositories/createGuardianApis'
import Error from '../components/error'
import Home from '../components/home'
import { guardianApis } from '../appContext'

interface Props {
  articlesResponse: GuardianResponse<Articles>
}

const Page: NextPage<Props> = props => {
  const { articlesResponse } = props
  if (articlesResponse.error) {
    return <Error message={articlesResponse.error.message} />
  }
  return <Home articlesResponse={articlesResponse} />
}

Page.getInitialProps = async () => {
  const articlesResponse = await guardianApis.getArticles()
  return { articlesResponse }
}

export default Page
