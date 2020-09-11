import { Client } from '@umbraco/headless-client'

const client = new Client({
  projectAlias: process.env.VUE_APP_UMBRACO__PROJECTALIAS!,
  apiKey: process.env.VUE_APP_UMBRACO__APIKEY,
  language: 'en-US'
})

export default client
