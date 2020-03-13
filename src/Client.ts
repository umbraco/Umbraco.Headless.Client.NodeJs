import { ManagementClient, DeliveryClient, AuthenticationClient } from './Clients'
import { Endpoint } from './Endpoint'
import { ApiRequest } from './ApiRequest'

/**
 * Client Options
 * @public
 */
export interface ClientOptions {
  /**
   * The Project Alias is a HTTP friendly version of the Project Name under your Umbraco Cloud account.
   */
  projectAlias: string
  /**
   * The default culture sent with all requests to the Content Delivery API, this can be overwritten per function
   */
  language?: string
  /**
   * An API Key is requierd when interacting with the Management API and when protection is enabled for the Delivery API
   */
  apiKey?: string
  /**
   * Used to retrieve access tokens for requests to the APIs.
   * @param request - The request thats about to be sent.
   */
  accessTokenResolver?(request: { data?: any, headers: any, method: 'get'|'GET'|'post'|'POST'|'put'|'PUT'|'delete'|'DELETE', url: string }): string
}

/**
 * Entry class for accessing the Content Delivery and Content Management APIs.
 * @public
 *
 * @example
 * ```typescript
 * import { Client } from '@umbraco/headless-client'
 *
 * const client = new Client({
 *  projectAlias: '<your-project-alias>',
 *  apiKey: '<your-api-key>',
 *  language: '<iso-code>',
 * })
 * ```
 */
export class Client {
  /**
   * Constructs a new instance of the `Client` class with the given options.
   * @param options - The options. See {@link ClientOptions}
   */
  constructor (public readonly options: ClientOptions) {

  }

  /**
   * Get Delivery client for fetching content and media from CDN.
   * See {@link DeliveryClient}
   */
  public readonly delivery = new DeliveryClient(this)

  /**
   * Get Manager Client for managing content on Umbraco Heartcore.
   * See {@link ManagementClient}
   */
  public readonly management = new ManagementClient(this)

  /**
   * Get Authentication Client for authenticating members and Backoffice users.
   * See {@link AuthenticationClient}
   */
  public readonly authentication = new AuthenticationClient(this)

  /**
   * Makes request from and [Endpoint]
   * @internal
   */
  public makeRequest = async <R extends any>(endpoint: Endpoint<R>, data?: any): Promise<R> => {
    const response = await new ApiRequest<any>(this.options, endpoint, data).promise()
    const items = this.getEmbeddedData(response)
    const pageData = this.getPagedData(response)

    if (pageData) {
      return {
        ...pageData,
        items
      }
    } else if (!pageData && items) {
      const { _embedded, _links, ...data } = response
      if (Object.keys(data).length) {
        return { ..._embedded, ...data }
      }
      return items
    }
    return response
  }

  /**
   * Sets the API to be used.
   * @param apikey - API Key
   * @deprecated Use `apiKey` in the constructor options instead.
   */
  public setAPIKey = (apikey: string) => {
    this.options.apiKey = apikey
  }

  /**
   * @deprecated Use `options.apiKey` instead.
   */
  public getAPIKey = () => this.options.apiKey

  private readonly getEmbeddedData = (response: any) => {
    if (Object.prototype.hasOwnProperty.call(response, '_embedded')) {
      const keys = Object.keys(response._embedded)
      const keyCount = keys.length
      if (keyCount === 1) {
        const key = keys[0]
        return response._embedded[key]
      }
    }

    return null
  }

  private readonly getPagedData = (response: any) => {
    const lookForProps = ['_totalItems', '_totalPages', '_page', '_pageSize']
    const keys = Object.keys(response)

    for (let i = 0; i < lookForProps.length; i++) {
      const needle = lookForProps[i]
      if (!keys.includes(needle)) return null
    }

    const object: any = {}
    lookForProps.forEach(key => {
      object[key.replace(/^_/, '')] = response[key]
    })

    return object
  }
}
