import { NextPage } from 'next'
import React from 'react'
import Error from '../components/error'
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import {
  ArticleRoot,
  GuardianResponse,
} from '../repositories/createGuardianApis'
import { guardianApis } from '../appContext'
import Detail from '../components/detail'
import { Button } from '@chakra-ui/core'

interface Props {
  articleResponse: GuardianResponse<ArticleRoot>
}

const Page: NextPage<Props> = props => {
  const { articleResponse } = props
  return (
    <>
      <NextLink href="/">
        <Button leftIcon={<ArrowBackIcon />} variant="link" my="3" size="lg">
          Back
        </Button>
      </NextLink>
      {articleResponse.error && (
        <Error message={articleResponse.error.message} />
      )}
      {articleResponse.response && (
        <Detail article={articleResponse.response.content} />
      )}
    </>
  )
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
