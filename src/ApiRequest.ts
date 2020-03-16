import { Endpoint, EndpointSource } from './Endpoint'
import { ClientOptions } from './Client'
import { APIRequestError } from './APIRequestError'
import axios, { AxiosRequestConfig } from 'axios'
import FormData from 'form-data'

/** @internal */
export class ApiRequest<R = any> {
  constructor (
    private readonly clientOptions: ClientOptions,
    public endpoint: Endpoint,
    public data?: any
  ) {}

  public promise = async (): Promise<R> => {
    const projectAlias = this.clientOptions.projectAlias
    const headers: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json+hal',
      'umb-project-alias': projectAlias,
      'api-version': '2.2'
    }

    if (this.endpoint.source === EndpointSource.CDN && this.clientOptions.language) {
      headers['Accept-Language'] = this.clientOptions.language
    }

    const requestInit: AxiosRequestConfig = {
      url: Endpoint.getURLAddress(this.endpoint),
      method: this.endpoint.method,
      headers: {}
    }

    if (this.clientOptions.apiKey) {
      headers['api-key'] = this.clientOptions.apiKey
    }

    const method = this.endpoint.method.toLowerCase()
    if ((method === 'post' || method === 'put') && !!this.data) {
      if (this.data instanceof FormData) {
        headers['Content-Type'] = `multipart/form-data; boundary=${this.data.getBoundary()}`
        requestInit.data = this.data
      } else if (this.data instanceof URLSearchParams) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded'
        requestInit.data = this.data
      } else {
        requestInit.data = JSON.stringify(this.data)
      }
    }
    requestInit.headers = headers

    if (this.clientOptions.accessTokenResolver) {
      // @ts-ignore
      const token = this.clientOptions.accessTokenResolver(requestInit)
      if (token) {
        requestInit.headers.Authorization = `Bearer ${token}`
      }
    }

    try {
      const response = await axios(requestInit)
      return response.data as R
    } catch (err) {
      throw new APIRequestError(err.message, err.response)
    }
  }
}
