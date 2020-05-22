import {
  ContentDeliveryFilterOptions,
  ContentTypeOptions,
  CultureOptions,
  DepthOptions,
  HyperlinksOption,
  PageOptions
} from './RequestOptions'

/** @internal */
export enum EndpointSource {
  CDN,
  Media,
  ContentManagement
}

type Options = ContentDeliveryFilterOptions | ContentTypeOptions | CultureOptions | DepthOptions | HyperlinksOption | PageOptions

/**
 * This class describes how and endpoint might will look,
 * it's not possible to change value
 * @internal
 */
export class Endpoint<R = any> {
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

    const params = new URLSearchParams()

    if (this.options) {
      if ('pageSize' in this.options && typeof this.options.pageSize === 'number') {
        params.append('pageSize', this.options.pageSize.toString())
      }
      if ('page' in this.options && typeof this.options.page === 'number') {
        params.append('page', this.options.page.toString())
      }
      if ('depth' in this.options && typeof this.options.depth === 'number') {
        params.append('depth', this.options.depth.toString())
      }
      if ('hyperlinks' in this.options && typeof this.options.hyperlinks === 'boolean') {
        params.append('hyperlinks', this.options.hyperlinks ? 'true' : 'false')
      }
      if ('contentType' in this.options && typeof this.options.contentType === 'string') {
        params.append('contentType', this.options.contentType)
      }
      if ('culture' in this.options && typeof this.options.culture === 'string') {
        params.append('culture', this.options.culture)
      }
    }

    const queryString = params.toString()

    if (queryString) {
      path += `${path.includes('?') ? '&' : '?'}${queryString}`
    }

    return path
  }
}
