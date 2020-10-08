import React, { useState } from 'react'
import {
  ArticlesRoot,
  GuardianResponse,
} from '../../repositories/createGuardianApis'
import ArticlesList from './articlesList'
import SearchBox from './searchBox'

interface Props {
  articlesResponse: GuardianResponse<ArticlesRoot>
}

const Comp: React.FC<Props> = props => {
  const [newestFirst, setNewestFirst] = useState(true)
  const toggleNewestFirst = () => setNewestFirst(!newestFirst)
  const { articlesResponse } = props
  return (
    <>
      <SearchBox
        mb="18px"
        newestFirst={newestFirst}
        toggleNewestFirst={toggleNewestFirst}
      />
      {articlesResponse.response && (
        <ArticlesList articles={articlesResponse.response.results} />
      )}
    </>
  )
}

export default Comp
