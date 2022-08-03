import { Client } from '../../Client';
import { Endpoint } from '../../Endpoint';
import { Endpoints } from '../../Endpoints';
import { ContentDeliveryRedirectOptions } from '../../RequestOptions';
import { Redirect } from '../../Responses/Redirect';

/**
 * RedirectDeliveryClient is used to access the Redirect part of the Content Delivery API.
 * @public
 *
 * @example
 * The {@link RedirectDeliveryClient} must be accessed through {@link Client}.
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
 * const mediaClient = client.delivery.redirect
 * ```
 */
export class RedirectDeliveryClient {
  /** @internal **/
  constructor(private readonly client: Client) { }

  private readonly makeRequest = async <R>(endpoint: Endpoint<R>, data?: any): Promise<R> => {
    const result = await this.client.makeRequest<R>(endpoint, data);
    return result;
  };

  /**
   * Fetch all redirects
   * @param options - Request options. See {@link ContentDeliveryRedirectOptions}
   * @returns a `Promise` that resolves to a {@link PagedResponse} of {@link Redirect}
   */
  async getAll<T extends Redirect>(options?: ContentDeliveryRedirectOptions) {
    return this.makeRequest(Endpoints.delivery.redirect.getAll<T>(options));
  }
}
