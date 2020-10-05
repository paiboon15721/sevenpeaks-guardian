import dotenv from 'dotenv'
dotenv.config()
import express, { Express, Response } from 'express'

const app: Express = express()
const port: number = 4000

app.get('/', (_, res: Response) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
