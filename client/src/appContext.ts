import { createContext } from 'react'
import createGuardianClient from './utils/createGuardianClient'
import createGuardianApis from './repositories/createGuardianApis'
import { __prod__ } from './constants'

const guardianClient = createGuardianClient(
  __prod__ ? '/api' : 'http://localhost:4000/api',
)
const guardianApis = createGuardianApis(guardianClient)

const AppContext = createContext({
  guardianApis,
})

export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer

export default AppContext
