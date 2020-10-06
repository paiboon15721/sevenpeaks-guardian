import { Express, Request, Response } from 'express'
import { GuardianApis } from './createGuardianApis'

export default (app: Express, guardianApis: GuardianApis) => {
  app.get('/articles', async (_, res: Response) => {
    const articles = await guardianApis.getArticles()
    res.status(articles.statusCode)
    res.send(articles)
  })

  app.get('/articles/*', async (req: Request, res: Response) => {
    const id = req.params[0]
    const article = await guardianApis.getArticleById(id)
    res.status(article.statusCode)
    res.send(article)
  })
}
