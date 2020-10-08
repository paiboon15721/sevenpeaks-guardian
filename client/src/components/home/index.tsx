import React from 'react'
import {
  ArticlesRoot,
  GuardianResponse,
} from '../../repositories/createGuardianApis'
import ArticlesList from './articlesList'

interface Props {
  articlesResponse: GuardianResponse<ArticlesRoot>
}

const Comp: React.FC<Props> = props => {
  const { articlesResponse } = props
  if (articlesResponse.response) {
    return <ArticlesList articles={articlesResponse.response.results} />
  }
  return null
}

export default Comp
