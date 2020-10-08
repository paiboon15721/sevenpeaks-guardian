import React, { useState, useEffect, useRef, useContext } from 'react'
import ArticlesList from './articlesList'
import SearchBox from './searchBox'
import appContext from '../../appContext'
import { useArticles, OrderBy } from '../../stores/articles'
import Error from '../error'

interface Props {}

const Comp: React.FC<Props> = () => {
  const {
    state: { articlesResponse, orderBy },
    dispatch,
  } = useArticles()
  const isFirstRun = useRef(true)
  const { guardianApis } = useContext(appContext)
  const [loading, setLoading] = useState(false)

  const fetchArticles = async (orderBy: OrderBy) => {
    setLoading(true)
    const articlesResponse = await guardianApis.getArticles(orderBy)
    dispatch({ type: 'SET_ARTICLES_RESPONSE', payload: articlesResponse })
    setLoading(false)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    fetchArticles(orderBy)
  }, [orderBy])

  return (
    <>
      <SearchBox mb="18px" loading={loading} />
      {articlesResponse.error && (
        <Error message={articlesResponse.error.message} />
      )}
      {articlesResponse.response && (
        <ArticlesList articles={articlesResponse.response.results} />
      )}
    </>
  )
}

export default Comp
