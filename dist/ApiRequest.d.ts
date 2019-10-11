import { Endpoint } from "./Endpoint";
import { Client } from "./Client";
export declare class ApiRequest<R = any> {
    private client;
    endpoint: Endpoint;
    data?: any;
    constructor(client: Client, endpoint: Endpoint, data?: any);
    promise: () => Promise<R>;
}
