import { Client } from '../../Client'
import { Endpoints } from '../../Endpoints'
import { Endpoint } from '../../Endpoint'
import {
  ContentDeliveryAncestorsOptions, ContentDeliveryByContentTypeOptions,
  ContentDeliveryByIdOptions,
  ContentDeliveryByUrlOptions, ContentDeliveryChildrenOptions, ContentDeliveryDescendantsOptions,
  ContentDeliveryRootOptions, ContentDeliverySearchOptions, ContentDeliveryFilterOptions
} from '../../RequestOptions'
import { Content } from '../../Responses'
import { PagedResponse } from '../../Responses/PagedResponse'
import { ContentFilter } from '../../RequestOptions/ContentFilterOptions'

/**
 * ContentDeliveryClient is used to access the Content part of the Content Delivery API.
 * @public
 */
export class ContentDeliveryClient {
  /** @internal */
  constructor (private readonly client: Client) {}

  private readonly makeRequest = async <R>(endpoint: Endpoint<R>, data?: any): Promise<R> => {
    const result = await this.client.makeRequest<R>(endpoint, data)
    return result
  }

  /**
   * Fetch all Content at the root.
   *
   * @param options - Request options. See {@link ContentDeliveryRootOptions}.
   * @returns a `Promise` that resolves to an array of {@link Content}.
   */
  async root<T extends Content> (options?: ContentDeliveryRootOptions) {
    return this.makeRequest(Endpoints.delivery.content.root<T>(options))
  }

  /**
   * Fetch a single Content item by its id.
   * @param id - GUID id of the Content item.
   * @param options - Request options. See {@link ContentDeliveryByIdOptions}.
   * @returns a `Promise` that resolves to a {@link Content} if found, otherwise `undefined`.
   */
  async byId<T extends Content> (id: string, options?: ContentDeliveryByIdOptions) {
    try {
      return await this.makeRequest(Endpoints.delivery.content.byId<T>(id, options))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Feth a single Contint item by its Url.
   * @param url - Url for the content to retrieve.
   * @param options - Request options. See {@link ContentDeliveryByUrlOptions}.
   * @returns a `Promise` that resolves to a {@link Content} if found, otherwise `undefined`.
   */
  async byUrl< T extends Content> (url: string, options?: ContentDeliveryByUrlOptions) {
    try {
      return await this.makeRequest(Endpoints.delivery.content.byUrl<T>(url, options))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Fetch children for a Content item.
   * @param id - GUID id of the Content item.
   * @param options - Request options. See {@link ContentDeliveryChildrenOptions}.
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link Content} if found, otherwise `undefined`.
   */
  async children<T extends Content> (id: string, options?: ContentDeliveryChildrenOptions): Promise<PagedResponse<T> | undefined> {
    try {
      return await this.makeRequest(Endpoints.delivery.content.children<T>(id, options))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }


  /**
   * Fetch ancestors for a content item.
   * @param id - GUID id of the Content item.
   * @param options - Request options. See {@link ContentDeliveryAncestorsOptions}.
   * @returns a `Promise` that resolves to an array of {@link Content} if found, otherwise `undefined`.
   */
  async ancestors (id: string, options?: ContentDeliveryAncestorsOptions) {
    try {
      return await this.makeRequest(Endpoints.delivery.content.ancestors(id, options))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Fetch descendants for a content item.
   * @param id - GUID id of the Content item.
   * @param options - Request options. See {@link ContentDeliveryDescendantsOptions}.
   * @returns a `Promise` that resolves to an array of {@link Content} if found, otherwise `undefined`.
   */
  async descendants (id: string, options?: ContentDeliveryDescendantsOptions) {
    try {
      return await this.makeRequest(Endpoints.delivery.content.descendants(id, options))
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return undefined
      }
      throw err
    }
  }

  /**
   * Fetch Content of a specific type.
   * @param contentType - Content Type to filter by.
   * @param options - Request options. See {@link ContentDeliveryByContentTypeOptions}
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link Content}.
   */
  async byContentType<T extends Content> (contentType: string, options?: ContentDeliveryByContentTypeOptions): Promise<PagedResponse<T>> {
    return this.makeRequest(Endpoints.delivery.content.byContentType<T>(contentType, options))
  }

  /**
   * Filter for Content containing specific property values
   * @param contentFilter - Filter object. See {@link ContentFilter}
   * @param options - Request options. See {@link ContentDeliveryFilterOptions}
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link Content}.
   */
  async filter<T extends Content> (body: ContentFilter, options?: ContentDeliveryFilterOptions): Promise<PagedResponse<T>> {
    return this.makeRequest(Endpoints.delivery.content.filter<T>(options), body)
  }

  /**
   * Search for Content containing term,
   * @param term - Term to search for
   * @param options - Request options. See {@link ContentDeliverySearchOptions}
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link Content}.
   */
  async search<T extends Content> (term: string, options?: ContentDeliverySearchOptions): Promise<PagedResponse<T>> {
    return this.makeRequest(Endpoints.delivery.content.search<T>(term, options))
  }
}
