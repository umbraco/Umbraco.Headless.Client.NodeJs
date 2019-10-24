import { Client } from "../Client";
/**
 * Client to fetch media related objects form Umbraco headless
 */
export declare class MediaClient {
    private readonly client;
    constructor(client: Client);
    private makeRequest;
    /**
     * Fetch root media
     */
    root: () => import("..").ApiRequest<any>;
    /**
     * Fetch media by id
     */
    byId: (id: string | number) => import("..").ApiRequest<any>;
    /**
     * Fetch media children
     */
    children: (id: string | number, options?: import("../RequestOptions").PageOptions) => import("..").ApiRequest<any>;
}
