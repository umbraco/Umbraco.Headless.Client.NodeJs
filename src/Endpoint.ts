/** @internal */
export enum EndpointSource {
  CDN,
  Media,
  ContentManagement
}

/**
 * This class describes how and endpoint might will look,
 * it's not possible to change value
 * @internal
 */
export class Endpoint<R = any, Options = any> {
  constructor (
    public readonly source: EndpointSource,
    public readonly path: string,
    public readonly urlParams: any,
    public readonly method: 'get'|'GET'|'post'|'POST'|'put'|'PUT'|'delete'|'DELETE',
    public readonly options?: Options
  ) {

  }

  /**
   * Replace path with urlParams
   */
  getPath = () => {
    const keys = Object.keys(this.urlParams)
    if (keys.length === 0) {
      return this.path
    }

    let path = this.path
    keys.forEach(key => {
      const value = this.urlParams[key]

      const regEx = new RegExp(`{${key}}`)
      path = path.replace(regEx, value)
    })

    return path
  }

  static getURLAddress = (endpoint: Endpoint) => {
    let url = 'https://{API_TYPE}.umbraco.io' + endpoint.getPath()

    const params = new URLSearchParams()

    if (endpoint.options) {
      if (typeof endpoint.options.pageSize === 'number') {
        params.append('pageSize', endpoint.options.pageSize)
      }
      if (typeof endpoint.options.page === 'number') {
        params.append('page', endpoint.options.page)
      }
      if (typeof endpoint.options.depth === 'number') {
        params.append('depth', endpoint.options.depth)
      }
      if (typeof endpoint.options.hyperlinks === 'boolean') {
        params.append('hyperlinks', endpoint.options.hyperlinks)
      }
      if (typeof endpoint.options.contentType === 'string') {
        params.append('contentType', endpoint.options.contentType)
      }
      if (typeof endpoint.options.culture === 'string') {
        params.append('culture', endpoint.options.culture)
      }
    }

    const queryString = params.toString()

    if (queryString) {
      url += `${url.includes('?') ? '&' : '?'}${queryString}`
    }

    let apiType: string
    switch (endpoint.source) {
      case EndpointSource.CDN:
        apiType = 'cdn'
        break

      case EndpointSource.ContentManagement:
        apiType = 'api'
        break
      default:
        apiType = 'cdn'
        break
    }

    url = url.replace('{API_TYPE}', apiType)

    return url
  }
}
