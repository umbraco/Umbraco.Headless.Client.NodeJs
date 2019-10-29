import { Client } from "../Client";
import { CDNClient } from "./CDNClient";
import { MediaClient } from "./MediaClient";

export class DeliveryClient {

    content = new CDNClient(this.client)
    media = new MediaClient(this.client)

    constructor(private client: Client) {}

}