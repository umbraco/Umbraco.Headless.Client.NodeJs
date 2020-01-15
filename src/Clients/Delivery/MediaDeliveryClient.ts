import { Client } from '../../Client'
import { Endpoint } from '../../Endpoint'
import { Endpoints } from '../../Endpoints'
import { MediaDeliveryChildrenOptions } from '../../RequestOptions/index'
import { Media } from '../../Responses/Media'

/**
 * MediaDeliveryClient is used to access the Media part of the Content Delivery API.
 * @public
 */
export class MediaDeliveryClient {
  /** @internal */
  constructor (private readonly client: Client) {}

  private readonly makeRequest = async <R>(endpoint: Endpoint, data?: any) => {
    const result = await this.client.makeRequest<R>(endpoint, data)
    return result
  }

  /**
   * Fetch all Media at the root.
   *
   * @returns a `Promise` that resolves to an array of {@link Media}.
   */
  async root<T extends Media> () {
    return this.makeRequest(Endpoints.delivery.media.root<T>())
  }

  /**
   * Fetch a single Media item by its id.
   * @param id - GUID id of the Media item.
   * @returns a `Promise` that resolves to a {@link Media} if found, otherwise `undefined`.
  */
  async byId<T extends Media> (id: string) {
    return this.makeRequest(Endpoints.delivery.media.byId<T>(id))
  }

  /**
   * Fetch children for a Media item.
   * @param id - GUID id of the Media item.
   * @param options - Request options. See {@link MediaDeliveryChildrenOptions}.
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link Media} if found, otherwise `undefined`.
   */
  async children<T extends Media> (id: string, options?: MediaDeliveryChildrenOptions) {
    return this.makeRequest(Endpoints.delivery.media.children<T>(id, options))
  }
}
