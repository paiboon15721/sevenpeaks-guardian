import React, { useContext } from 'react'
import ArticlesList from './articlesList'
import SearchBox from './searchBox'
import appContext from '../../appContext'
import { useArticles } from '../../stores/articles'
import Error from '../error'
import { Skeleton, SimpleGrid, Alert, AlertIcon } from '@chakra-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component'
import useArticlesEffect from '../../hooks/useArticlesEffect'

interface Props {}

const Comp: React.FC<Props> = () => {
  const {
    state: { articlesResponse, orderBy, q, articles },
    dispatch,
  } = useArticles()
  const loading = useArticlesEffect()
  const { guardianApis } = useContext(appContext)

  const fetchMoreArticles = async () => {
    const res = await guardianApis.getArticles(
      orderBy,
      q,
      articlesResponse.response!.currentPage + 1,
    )
    dispatch({ type: 'ADD_ARTICLES_RESPONSE', payload: res })
  }

  return (
    <>
      <SearchBox mb="24px" loading={loading} />
      {articlesResponse.error && (
        <Error message={articlesResponse.error.message} />
      )}
      <Skeleton isLoaded={!loading}>
        {articlesResponse.response && (
          <InfiniteScroll
            dataLength={articles.length}
            hasMore={
              articlesResponse.response.currentPage <
              articlesResponse.response.pages
            }
            next={fetchMoreArticles}
            loader={
              <SimpleGrid mt="24px" columns={[1, null, 2]} spacing="8px">
                {[...Array(20).keys()].map(v => (
                  <Skeleton key={v} height="20px" />
                ))}
              </SimpleGrid>
            }
            endMessage={
              articles.length ? (
                <Alert status="success">
                  <AlertIcon />
                  You have seen it all
                </Alert>
              ) : (
                <Alert status="error">
                  <AlertIcon />
                  Not found!
                </Alert>
              )
            }
          >
            <ArticlesList articles={articles} />
          </InfiniteScroll>
        )}
      </Skeleton>
    </>
  )
}

export default Comp
