import { Endpoint, EndpointSource } from './Endpoint'
import { ClientOptions, ProxyOptions } from './Client'
import { APIRequestError } from './APIRequestError'
import axios, { AxiosRequestConfig } from 'axios'
import FormData from 'form-data'

/** @internal */
export class ApiRequest<R = any> {
  constructor (
    private readonly options: ClientOptions | ProxyOptions,
    public endpoint: Endpoint,
    public data?: any
  ) {}

  public promise = async (): Promise<R> => {
    const headers: any = {
      'Content-Type': 'application/json',
      Accept: 'application/json+hal',
      'api-version': '2.2'
    }

    if ('projectAlias' in this.options) {
      headers['umb-project-alias'] = this.options.projectAlias
    }

    if (this.endpoint.source === EndpointSource.CDN && this.options.language) {
      headers['Accept-Language'] = this.options.language
    }

    if ('apiKey' in this.options && this.options.apiKey) {
      headers['api-key'] = this.options.apiKey
    }

    const path = this.endpoint.getPath()
    let url = `https://cdn.umbraco.io`

    if (this.endpoint.source === EndpointSource.ContentManagement) {
      url = 'apiProxyUrl' in this.options
        ? `${this.options.cdnProxyUrl}`
        : `https://api.umbraco.io`
    }

    if ('cdnProxyUrl' in this.options) {
      url = `${this.options.cdnProxyUrl}`
    }

    url = url.endsWith('/') ? `${url}${path.substr(1)}` : `${url}${path}`

    const requestInit: AxiosRequestConfig = {
      url: url,
      method: this.endpoint.method,
      headers: {}
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

    if ('accessTokenResolver' in this.options) {
      // @ts-ignore
      const token = this.options.accessTokenResolver(requestInit)
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
