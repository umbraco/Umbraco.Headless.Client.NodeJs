import { Client } from "../Client";
import { DepthOptions, PageOptions } from "../RequestOptions";
import { ContentResponseElement } from "../Responses";
/**
 * CDNClient is used to fetch content related objects from Umbraco headless
 */
declare class CDNClient {
    private readonly client;
    constructor(client: Client);
    private makeRequest;
    /**
     * Fetch root content
     */
    root: <T extends ContentResponseElement>() => import("..").ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<T>, any>>;
    /**
     * Fetch Content by id
     */
    byId: <T extends ContentResponseElement>(id: string | number, options?: DepthOptions) => import("..").ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<T>, any>>;
    /**
     * Fetch Content by url
     */
    byUrl: <T extends ContentResponseElement>(url: string, options?: DepthOptions) => import("..").ApiRequest<T>;
    /**
     * Fetch Content children
     */
    children: <T extends ContentResponseElement>(id: string | number, options?: PageOptions) => import("..").ApiRequest<import("..").ApiPagedResponse<import("../Responses").RootContentResponse<T>>>;
    /**
     * Fetch Content ancestors
     */
    ancestors: (id: string | number) => import("..").ApiRequest<any>;
    /**
     * Fetch Content descendants
     */
    descendants: (id: string | number, options?: PageOptions) => import("..").ApiRequest<any>;
}
export { CDNClient };
