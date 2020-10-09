import { useContext, useEffect, useRef, useState } from 'react'
import { useDebounce } from 'use-debounce'
import appContext from '../appContext'
import { useArticles } from '../stores/articles'

const useArticlesEffect = () => {
  const { guardianApis } = useContext(appContext)
  const {
    state: { orderBy, q },
    dispatch,
  } = useArticles()

  const [loading, setLoading] = useState(false)
  const [debounceQ] = useDebounce(q, 500)

  const isFirstRun = useRef(true)

  const fetchArticles = async () => {
    setLoading(true)
    const res = await guardianApis.getArticles(orderBy, q)
    dispatch({ type: 'SET_ARTICLES_RESPONSE', payload: res })
    setLoading(false)
  }

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    fetchArticles()
  }, [orderBy, debounceQ])
  return loading
}

export default useArticlesEffect
