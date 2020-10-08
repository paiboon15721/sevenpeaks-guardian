import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import {
  ArticlesRoot,
  GuardianResponse,
} from '../repositories/createGuardianApis'

export type OrderBy = 'newest' | 'oldest'

interface InitialState {
  articlesResponse: GuardianResponse<ArticlesRoot>
  q: string
  orderBy: OrderBy
}

type Action =
  | {
      type: 'SET_ARTICLES_RESPONSE'
      payload: GuardianResponse<ArticlesRoot>
    }
  | { type: 'SET_Q'; payload: string }
  | { type: 'TOGGLE_ORDER_BY' }

const ArticlesContext = createContext<{
  state: InitialState
  dispatch: Dispatch<Action>
}>({
  state: { articlesResponse: { statusCode: 200 }, q: '', orderBy: 'newest' },
  dispatch: () => null,
})

const articlesReducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'SET_ARTICLES_RESPONSE':
      return {
        ...state,
        articlesResponse: action.payload as GuardianResponse<ArticlesRoot>,
      }
    case 'SET_Q':
      return { ...state, q: action.payload as string }
    case 'TOGGLE_ORDER_BY':
      return {
        ...state,
        orderBy: state.orderBy === 'newest' ? 'oldest' : 'newest',
      }
    default:
      return state
  }
}

export const ArticlesProvider: React.FC<InitialState> = props => {
  const initialState: InitialState = {
    articlesResponse: props.articlesResponse,
    q: '',
    orderBy: 'newest',
  }

  const [state, dispatch] = useReducer(articlesReducer, initialState)

  return (
    <ArticlesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ArticlesContext.Provider>
  )
}

export const useArticles = () => useContext(ArticlesContext)
