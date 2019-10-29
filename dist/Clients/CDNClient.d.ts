import { Client } from "../Client";
import { CDNContentByContentTypeOptions, CDNContentByIdOptions, CDNContentChildrenOptions, CDNContentRootOptions } from "../RequestOptions/index";
import { ContentResponseElement } from "../Responses/index";
/**
 * CDNClient is used to fetch content related objects from Umbraco headless
 */
declare class CDNClient {
    private readonly client;
    constructor(client: Client);
    private makeRequest;
    /**
     * Fetch root content
     * @param options Request options
     */
    root: <T extends ContentResponseElement>(options?: CDNContentRootOptions | undefined) => Promise<T[]>;
    /**
     * Fetch Content by id
     * @param id GUID part of an Umbraco UDI
     * @param options Request options
     */
    byId: <T extends ContentResponseElement>(id: string | number, options?: CDNContentByIdOptions | undefined) => Promise<T>;
    /**
     * Fetch Content by url
     * @param url URL to search for
     * @param options Request options
     */
    byUrl: <T extends ContentResponseElement>(url: string, options?: CDNContentByIdOptions | undefined) => Promise<T>;
    /**
     * Fetch Content children
     * @param id GUID part of an Umbraco UDI
     * @param options Request options
     */
    children: <T extends ContentResponseElement>(id: string | number, options?: CDNContentChildrenOptions | undefined) => Promise<import("../Responses").PagedResponse<T>>;
    /**
     * Fetch Content ancestors
     * @param id GUID part of an Umbraco UDI
     * @param options Request options
     */
    ancestors: (id: string | number, options?: CDNContentRootOptions | undefined) => Promise<ContentResponseElement[]>;
    /**
     * Fetch Content descendants
     * @param id GUID part of an Umbraco UDI
     * @param options Request options
     */
    descendants: (id: string | number, options?: CDNContentChildrenOptions | undefined) => Promise<ContentResponseElement[]>;
    /**
     * Fetch content with content type
     * TODO: Fix add missing types all around this call
     * @param contentType Content type needed to be displayed
     * @param options Request options
     */
    byContentType: (contentType: string, options?: CDNContentByContentTypeOptions | undefined) => Promise<import("../Responses").PagedResponse<ContentResponseElement>>;
    /**
     * Search for content containing term
     * TODO: Fix add missing types all around this call
     * @param term Term to search for
     * @param options Request options
     */
    search: (term: string, options?: CDNContentByContentTypeOptions | undefined) => Promise<import("../Responses").PagedResponse<ContentResponseElement>>;
}
export { CDNClient };
