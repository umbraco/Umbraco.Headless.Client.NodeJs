import { Client } from '@umbraco/headless-client'

const client = new Client({
  projectAlias: process.env.VUE_APP_UMBRACO__PROJECTALIAS!,
  language: 'en-US'
})

export default client
