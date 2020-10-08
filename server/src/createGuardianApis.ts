import { AxiosInstance } from 'axios'

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
    orderBy: 'oldest' | 'newest',
    q?: string,
    page?: string,
  ) => Promise<GuardianResponse<ArticlesRoot>>
  getArticleById: (id: string) => Promise<GuardianResponse<ArticleRoot>>
}

export default (guardianClient: AxiosInstance): GuardianApis => ({
  async getArticles(orderBy, q, page): Promise<GuardianResponse<ArticlesRoot>> {
    const { data } = await guardianClient.get<GuardianResponse<ArticlesRoot>>(
      '/search',
      {
        params: {
          q,
          'order-by': orderBy,
          'show-fields': 'thumbnail,starRating,headline',
          page,
        },
      },
    )
    return data
  },

  async getArticleById(id): Promise<GuardianResponse<ArticleRoot>> {
    const { data } = await guardianClient.get<GuardianResponse<ArticleRoot>>(
      `/${id}`,
      {
        params: {
          'show-fields': 'starRating,thumbnail,headline,body',
        },
      },
    )
    return data
  },
})
