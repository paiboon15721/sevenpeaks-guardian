import { AxiosInstance } from 'axios'

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

export interface ArticlesResponse {
  response: {
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
}

export interface ArticleResponse {
  response: {
    status: string
    userTier: string
    total: number
    content: Article
  }
}

export interface GuardianApis {
  getArticles: (q?: string) => Promise<ArticlesResponse>
  getArticleById: (id: string) => Promise<ArticleResponse>
}

export default (guardianClient: AxiosInstance): GuardianApis => ({
  async getArticles(q): Promise<ArticlesResponse> {
    const { data } = await guardianClient.get('/search', { params: { q } })
    return data
  },
  async getArticleById(id): Promise<ArticleResponse> {
    const { data } = await guardianClient.get(`/${id}`)
    return data
  },
})
