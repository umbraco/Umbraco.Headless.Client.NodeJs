import { Client } from "../Client";
import { CDNContentByIdOptions, CDNContentChildrenOptions, CDNContentRootOptions } from "../RequestOptions";
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
    root: <T extends ContentResponseElement>(options?: CDNContentRootOptions) => import("..").ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<T>, any>>;
    /**
     * Fetch Content by id
     */
    byId: <T extends ContentResponseElement>(id: string | number, options?: CDNContentByIdOptions) => import("..").ApiRequest<import("..").ApiResponse<import("../Responses").RootContentResponse<T>, any>>;
    /**
     * Fetch Content by url
     */
    byUrl: <T extends ContentResponseElement>(url: string, options?: CDNContentByIdOptions) => import("..").ApiRequest<T>;
    /**
     * Fetch Content children
     */
    children: <T extends ContentResponseElement>(id: string | number, options?: CDNContentChildrenOptions) => import("..").ApiRequest<import("..").ApiPagedResponse<import("../Responses").RootContentResponse<T>>>;
    /**
     * Fetch Content ancestors
     */
    ancestors: (id: string | number, options?: CDNContentRootOptions) => import("..").ApiRequest<any>;
    /**
     * Fetch Content descendants
     */
    descendants: (id: string | number, options?: CDNContentChildrenOptions) => import("..").ApiRequest<any>;
}
export { CDNClient };
