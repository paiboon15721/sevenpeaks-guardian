import React from 'react'
import ArticlesList from './articlesList'
import SearchBox from './searchBox'
import { useArticles } from '../../stores/articles'
import Error from '../error'
import { Skeleton } from '@chakra-ui/core'
import useArticlesEffect from '../../hooks/useArticlesEffect'
import ArticlesInfiniteScroll from './articlesInfiniteScroll'

interface Props {}

const Comp: React.FC<Props> = () => {
  const {
    state: { articlesResponse, articles },
  } = useArticles()
  const loading = useArticlesEffect()

  return (
    <>
      <SearchBox mb="24px" loading={loading} />
      {articlesResponse.error && (
        <Error message={articlesResponse.error.message} />
      )}
      <Skeleton isLoaded={!loading}>
        {articlesResponse.response && (
          <ArticlesInfiniteScroll>
            <ArticlesList articles={articles} />
          </ArticlesInfiniteScroll>
        )}
      </Skeleton>
    </>
  )
}

export default Comp
