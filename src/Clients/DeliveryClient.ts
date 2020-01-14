import { Client } from "../Client";
import { ContentClient } from "./ContentClient";
import { MediaClient } from "./MediaClient";

/**
 * Client used to access the Content Delivery API.
 * @public
 */
export class DeliveryClient {

  /**
   * The Content client for the Content Delivery API.
   * See {@link ContentClient}
   */
  public readonly content = new ContentClient(this.client)

  /**
   * The Media client for the Content Delivery API.
   * See {@link MediaClient}
   */
  public readonly media = new MediaClient(this.client)

  /** @internal */
  constructor(private client: Client) {}

}
