import { Client } from "../Client";
import { CDNClient } from "./CDNClient";
import { MediaClient } from "./MediaClient";
export declare class DeliveryClient {
    private client;
    content: CDNClient;
    media: MediaClient;
    constructor(client: Client);
}
