import { Alert, AlertIcon } from '@chakra-ui/core'
import React, { useContext } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useArticles } from '../../../stores/articles'
import Loading from './loading'
import AppContext from '../../../appContext'

interface Props {}

const Comp: React.FC<Props> = ({ children }) => {
  const {
    state: { articlesResponse, orderBy, q, articles },
    dispatch,
  } = useArticles()

  const { guardianApis } = useContext(AppContext)

  const fetchMoreArticles = async () => {
    const res = await guardianApis.getArticles(
      orderBy,
      q,
      articlesResponse.response!.currentPage + 1,
    )
    dispatch({ type: 'ADD_ARTICLES_RESPONSE', payload: res })
  }

  return (
    <InfiniteScroll
      dataLength={articles.length}
      hasMore={
        articlesResponse.response!.currentPage <
        articlesResponse.response!.pages
      }
      next={fetchMoreArticles}
      loader={<Loading />}
      endMessage={
        articles.length ? (
          <Alert mt="24px" status="success">
            <AlertIcon />
            You have seen it all!
          </Alert>
        ) : (
          <Alert status="error">
            <AlertIcon />
            So sad... data not found.
          </Alert>
        )
      }
    >
      {children}
    </InfiniteScroll>
  )
}

export default Comp
