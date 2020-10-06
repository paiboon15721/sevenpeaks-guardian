import dotenv from 'dotenv'
dotenv.config()
import express, { Express } from 'express'
import createGuardianApis from './createGuardianApis'
import setupGuardianRoutes from './setupGuardianRoutes'
import createGuardianClient from './createGuardianClient'

const app: Express = express()
const port: number = 4000

const { GUARDIAN_KEY, GUARDIAN_URL } = process.env

const guardianClient = createGuardianClient(GUARDIAN_URL, GUARDIAN_KEY)
const guardianApis = createGuardianApis(guardianClient)

setupGuardianRoutes(app, guardianApis)

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

export default server
