import { Client } from '../../Client';
import { Endpoints } from '../../Endpoints';
import { Endpoint } from '../../Endpoint';
import { ContentDeliveryRedirectOptions } from '../../RequestOptions';
import { Redirect } from '../../Responses/Redirect';


export class RedirectDeliveryClient {
  /** @internal */
  constructor(private readonly client: Client) { }

  private readonly makeRequest = async <R>(endpoint: Endpoint<R>, data?: any): Promise<R> => {
    debugger;
    const result = await this.client.makeRequest<R>(endpoint, data);
    return result;
  };

  async getAll<T extends Redirect>(options?: ContentDeliveryRedirectOptions) {
    return this.makeRequest(Endpoints.delivery.redirect.getAll<T>(options));
  }
}
