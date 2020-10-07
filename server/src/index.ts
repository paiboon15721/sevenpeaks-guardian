import dotenv from 'dotenv'
dotenv.config()
import express, { Express } from 'express'
import cors from 'cors'
import createGuardianApis from './createGuardianApis'
import createGuardianRouter from './createGuardianRouter'
import createGuardianClient from './createGuardianClient'

const app: Express = express()
const port: number = 4000

app.use(cors({ origin: 'http://localhost:3000' }))

const { GUARDIAN_KEY, GUARDIAN_URL } = process.env

const guardianClient = createGuardianClient(GUARDIAN_URL, GUARDIAN_KEY)
const guardianApis = createGuardianApis(guardianClient)
const guardianRouter = createGuardianRouter(guardianApis)

app.use('/api', guardianRouter)

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

export default server
