import { Client } from '../../Client'
import { ContentDeliveryClient } from './ContentDeliveryClient'
import { MediaDeliveryClient } from './MediaDeliveryClient'

/**
 * DeliveryClient used to access the Content Delivery API.
 * @public
 */
export class DeliveryClient {
  /**
   * The Content client for the Content Delivery API.
   * See {@link ContentDeliveryClient}
   */
  public readonly content = new ContentDeliveryClient(this.client)

  /**
   * The Media client for the Content Delivery API.
   * See {@link MediaDeliveryClient}
   */
  public readonly media = new MediaDeliveryClient(this.client)

  /** @internal */
  constructor (private readonly client: Client) {}
}
