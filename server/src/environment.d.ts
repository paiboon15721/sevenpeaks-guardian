declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    GUARDIAN_KEY: string
    GUARDIAN_URL: string
  }
}
