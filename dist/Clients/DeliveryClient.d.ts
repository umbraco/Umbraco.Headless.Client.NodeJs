import { Client } from "../Client";
import { ContentClient } from "./ContentClient";
import { MediaClient } from "./MediaClient";
export declare class DeliveryClient {
    private client;
    content: ContentClient;
    media: MediaClient;
    constructor(client: Client);
}
