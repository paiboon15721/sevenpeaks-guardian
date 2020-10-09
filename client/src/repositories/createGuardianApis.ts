import { AxiosInstance } from 'axios'
import { OrderBy } from '../stores/articles'

export interface GuardianResponse<T> {
  statusCode: number
  error?: Error
  response?: T
}

export interface Error {
  status: string
  message: string
}

export interface Article {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  fields: {
    starRating?: string
    thumbnail?: string
    headline: string
    body?: string
  }
}

export interface ArticlesRoot {
  status: string
  userTier: string
  total: number
  startIndex: number
  pageSize: number
  currentPage: number
  pages: number
  orderBy: string
  results: Article[]
}

export interface ArticleRoot {
  status: string
  userTier: string
  total: number
  content: Article
}

export interface GuardianApis {
  getArticles: (
    orderBy?: OrderBy,
    q?: string,
    page?: number,
  ) => Promise<GuardianResponse<ArticlesRoot>>
  getArticleById: (id: string) => Promise<GuardianResponse<ArticleRoot>>
}

const createGuardianClient = (guardianClient: AxiosInstance): GuardianApis => ({
  async getArticles(
    orderBy = 'newest',
    q = '',
    page = 1,
  ): Promise<GuardianResponse<ArticlesRoot>> {
    const { data } = await guardianClient.get<GuardianResponse<ArticlesRoot>>(
      '/articles',
      {
        params: { q, orderBy, page },
      },
    )
    return data
  },

  async getArticleById(id): Promise<GuardianResponse<ArticleRoot>> {
    const { data } = await guardianClient.get<GuardianResponse<ArticleRoot>>(
      `/articles/${id}`,
    )
    return data
  },
})

export default createGuardianClient
