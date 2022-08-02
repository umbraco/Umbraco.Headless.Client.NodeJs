import { Client } from '../../Client'
import { ContentDeliveryClient } from './ContentDeliveryClient'
import { MediaDeliveryClient } from './MediaDeliveryClient'
import { RedirectDeliveryClient } from './RedirectDeliveryClient'

/**
 * DeliveryClient used to access the Content Delivery API.
 * @public
 *
 * @example
 * The {@link DeliveryClient} must be accessed through {@link Client}.
 *
 * ```typescript
 * import { Client } from '@umbraco/headless-client'
 *
 * const client = new Client({
 *  projectAlias: '<your-project-alias>',
 *  apiKey: '<your-api-key>',
 *  language: '<iso-code>',
 * })
 *
 * const deliveryClient = client.delivery
 * ```
 */
export class DeliveryClient {
  /**
   * The Content client for the Content Delivery API.
   * See {@link ContentDeliveryClient}
   */
  public readonly content = new ContentDeliveryClient(this.client);

  /**
   * The Media client for the Content Delivery API.
   * See {@link MediaDeliveryClient}
   */
  public readonly media = new MediaDeliveryClient(this.client);

  /**
   * The Redirect client for the Content Delivery API.
   * See {@link RedirectDeliveryClient}
   */
  public readonly redirect = new RedirectDeliveryClient(this.client);

  /** @internal */
  constructor (private readonly client: Client) {}
}
