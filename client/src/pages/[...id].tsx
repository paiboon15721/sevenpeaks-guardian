import { NextPage } from 'next'
import React from 'react'
import Error from '../components/error'
import {
  ArticleRoot,
  GuardianResponse,
} from '../repositories/createGuardianApis'
import { guardianApis } from '../appContext'
import Detail from '../components/detail'

interface Props {
  articleResponse: GuardianResponse<ArticleRoot>
}

const Page: NextPage<Props> = props => {
  const { articleResponse } = props
  if (articleResponse.error) {
    return <Error message={articleResponse.error.message} />
  }

  if (articleResponse.response) {
    console.log(articleResponse.response)
    return <Detail article={articleResponse.response.content} />
  }

  return null
}

Page.getInitialProps = async ctx => {
  const { id } = ctx.query
  if (Array.isArray(id)) {
    const articleResponse = await guardianApis.getArticleById(id.join('/'))
    return { articleResponse }
  }
  return {
    articleResponse: {
      statusCode: 400,
      error: { message: 'Bad Request', status: 'error' },
    },
  }
}

export default Page
