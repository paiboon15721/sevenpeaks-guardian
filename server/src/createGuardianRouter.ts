import { Router, Request, Response } from 'express'
import { GuardianApis } from './createGuardianApis'

type GetArticlesQuery = {
  q: string
  orderBy: 'oldest' | 'newest'
  page: string
}

export default (guardianApis: GuardianApis) => {
  const router = Router()

  router.get('/articles', async (req: Request, res: Response) => {
    const { q, orderBy, page = '1' } = req.query as GetArticlesQuery
    const articles = await guardianApis.getArticles(orderBy, q, page)
    res.status(articles.statusCode)
    res.send(articles)
  })

  router.get('/articles/*', async (req: Request, res: Response) => {
    const id = req.params[0]
    const article = await guardianApis.getArticleById(id)
    res.status(article.statusCode)
    res.send(article)
  })

  return router
}
