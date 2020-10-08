import React, { useState, useEffect, useRef, useContext } from 'react'
import ArticlesList from './articlesList'
import SearchBox from './searchBox'
import appContext from '../../appContext'
import { useArticles } from '../../stores/articles'
import Error from '../error'
import { Skeleton } from '@chakra-ui/core'

interface Props {}

const Comp: React.FC<Props> = () => {
  const {
    state: { articlesResponse, orderBy, q },
    dispatch,
  } = useArticles()
  const isFirstRun = useRef(true)
  const { guardianApis } = useContext(appContext)
  const [loading, setLoading] = useState(false)

  const fetchArticles = async () => {
    setLoading(true)
    const articlesResponse = await guardianApis.getArticles(orderBy, q)
    dispatch({ type: 'SET_ARTICLES_RESPONSE', payload: articlesResponse })
    setLoading(false)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    fetchArticles()
  }, [orderBy])

  return (
    <>
      <SearchBox mb="18px" loading={loading} />
      {articlesResponse.error && (
        <Error message={articlesResponse.error.message} />
      )}
      <Skeleton isLoaded={!loading}>
        {articlesResponse.response && (
          <ArticlesList articles={articlesResponse.response.results} />
        )}
      </Skeleton>
    </>
  )
}

export default Comp
