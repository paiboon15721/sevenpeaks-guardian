import { Express, Request, Response } from 'express'
import {
  ArticleResponse,
  ArticlesResponse,
  GuardianApis,
} from './createGuardianApis'

export default (app: Express, guardianApis: GuardianApis) => {
  app.get('/articles', async (_, res: Response) => {
    const articlesResponse: ArticlesResponse = await guardianApis.getArticles()
    res.send(articlesResponse)
  })

  app.get('/articles/*', async (req: Request, res: Response) => {
    const id = req.params[0]
    const articleResponse: ArticleResponse = await guardianApis.getArticleById(
      id,
    )
    res.send(articleResponse)
  })
}
