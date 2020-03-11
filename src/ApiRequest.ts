import { Endpoint, EndpointSource } from './Endpoint'
import { Client } from './Client'
import { APIRequestError } from './APIRequestError'
import axios, { AxiosRequestConfig } from 'axios'
import FormData from 'form-data'
import debug from 'debug'

const log = debug('umbraco:headless:api')

/** @internal */
export class ApiRequest<R = any> {
  constructor (
    private readonly client: Client,
    public endpoint: Endpoint,
    public data?: any
  ) {}

  public promise = async (): Promise<R> => {
    const projectAlias = this.client.options.projectAlias
    const headers: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json+hal',
      'umb-project-alias': projectAlias,
      'api-version': '2.1'
    }

    if (this.endpoint.source === EndpointSource.CDN && this.client.options.language) {
      headers['Accept-Language'] = this.client.options.language
    }

    const requestInit: AxiosRequestConfig = {
      url: Endpoint.getURLAddress(this.endpoint),
      method: this.endpoint.method,
      headers: {}
    }

    if (this.endpoint.source === EndpointSource.ContentManagement) {
      if (!this.client.options.apiKey) {
        throw new Error('API Key is missing')
      }
    }

    if (this.client.options.apiKey) {
      headers['api-key'] = this.client.options.apiKey
    }

    const options = this.endpoint.options
    log('options', options)

    const method = this.endpoint.method.toLowerCase()
    if ((method === 'post' || method === 'put') && !!this.data) {
      const requestOptions = this.endpoint.options
      if (this.data instanceof FormData) {
        headers['Content-Type'] = `multipart/form-data; boundary=${this.data.getBoundary()}`
        requestInit.data = this.data
      }

      if (!requestInit.data) {
        requestInit.data = JSON.stringify(this.data)
      }
    }
    requestInit.headers = headers

    log('Request init')
    log(requestInit)

    try {
      const response = await axios(requestInit)
      return response.data as R
    } catch (err) {
      throw new APIRequestError(err.message, err.response)
    }
  }
}
