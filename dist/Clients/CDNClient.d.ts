import { Client } from "../Client";
import { DepthOptions, PageOptions } from "../RequestOptions";
import { ContentResponseElement } from "../Responses";
export declare class CDNClient {
    private readonly client;
    constructor(client: Client);
    private makeRequest;
    /**
     * Fetch root content
     */
    root: <T extends ContentResponseElement>() => import("..").ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<T>>>;
    /**
     * Fetch Content by id
     */
    byId: (id: string | number, options?: DepthOptions) => import("..").ApiRequest<any>;
    /**
     * Fetch Content by url
     */
    byUrl: (url: string, options?: DepthOptions) => import("..").ApiRequest<any>;
    /**
     * Fetch Content children
     */
    children: (id: string | number, options?: PageOptions) => import("..").ApiRequest<any>;
    /**
     * Fetch Content ancestors
     */
    ancestors: (id: string | number) => import("..").ApiRequest<any>;
    /**
     * Fetch Content descendants
     */
    descendants: (id: string | number, options?: PageOptions) => import("..").ApiRequest<any>;
}
