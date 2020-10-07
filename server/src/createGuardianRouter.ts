import { Router, Request, Response } from 'express'
import { GuardianApis } from './createGuardianApis'

export default (guardianApis: GuardianApis) => {
  const router = Router()

  router.get('/articles', async (_, res: Response) => {
    const articles = await guardianApis.getArticles()
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
