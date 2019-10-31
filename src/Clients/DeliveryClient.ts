import { Client } from "../Client";
import { ContentClient } from "./CDNClient";
import { MediaClient } from "./MediaClient";

export class DeliveryClient {

    content = new ContentClient(this.client)
    media = new MediaClient(this.client)

    constructor(private client: Client) {}

}
