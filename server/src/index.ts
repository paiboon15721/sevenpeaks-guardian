import dotenv from 'dotenv'
dotenv.config()
import express, { Express } from 'express'
import createGuardianApis from './createGuardianApis'
import setupGuardianRoutes from './setupGuardianRoutes'
import createHttpClient from './createHttpClient'

const app: Express = express()
const port: number = 4000

const { GUARDIAN_KEY, GUARDIAN_URL } = process.env

const guardianClient = createHttpClient(GUARDIAN_URL, {
  'api-key': GUARDIAN_KEY,
})
const guardianApis = createGuardianApis(guardianClient)

setupGuardianRoutes(app, guardianApis)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
