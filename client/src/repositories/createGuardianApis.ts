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
  webPublicationDate: Date
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
}

export interface Articles {
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

export interface Article {
  status: string
  userTier: string
  total: number
  content: Article
}

export interface GuardianApis {
  getArticles: (q?: string) => Promise<GuardianResponse<Articles>>
  getArticleById: (id: string) => Promise<GuardianResponse<Article>>
}

export default (guardianClient: AxiosInstance): GuardianApis => ({
  async getArticles(q): Promise<GuardianResponse<Articles>> {
    const { data } = await guardianClient.get<GuardianResponse<Articles>>(
      '/articles',
      {
        params: { q },
      },
    )
    return data
  },

  async getArticleById(id): Promise<GuardianResponse<Article>> {
    const { data } = await guardianClient.get<GuardianResponse<Article>>(
      `/articles/${id}`,
    )
    return data
  },
})
