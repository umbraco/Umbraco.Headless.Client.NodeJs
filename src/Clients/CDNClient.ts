import {Client} from "../Client";
import {Endpoints} from "../Endpoints";
import {Endpoint} from "../Endpoint";
import {
    CDNContentAncestorsOptions,
    CDNContentByIdOptions,
    CDNContentByURLOptions, CDNContentChildrenOptions, CDNContentDescendantsOptions,
    CDNContentRootOptions,
} from "../RequestOptions";
import {ContentResponseElement} from "../Responses";


/**
 * CDNClient is used to fetch content related objects from Umbraco headless
 */
class CDNClient {
    constructor(private readonly client: Client) {

    }

    private makeRequest = <R>(endpoint: Endpoint<R>, data?: any) => {
        return this.client.makeRequest<R>(endpoint, data)
    }


    /**
     * Fetch root content
     */
    public root = <T extends ContentResponseElement>(options?: CDNContentRootOptions) => {
        return this.makeRequest(Endpoints.cdn.root<T>(options))
    }

    /**
     * Fetch Content by id
     */
    public byId = <T extends ContentResponseElement>(id: string|number, options?: CDNContentByIdOptions) => {
        return this.makeRequest(Endpoints.cdn.byId<T>(id, options))
    }

    /**
     * Fetch Content by url
     */
    public byUrl =< T extends ContentResponseElement>(url: string, options?: CDNContentByURLOptions) => {
        return this.makeRequest(Endpoints.cdn.byUrl<T>(url, options))
    }

    /**
     * Fetch Content children
     */
    public children = <T extends ContentResponseElement>(id: string|number, options?: CDNContentChildrenOptions) => {
        return this.makeRequest(Endpoints.cdn.children<T>(id, options))
    }

    /**
     * Fetch Content ancestors
     */
    public ancestors = (id: string|number, options?: CDNContentAncestorsOptions) => {
        return this.makeRequest(Endpoints.cdn.ancestors(id, options))
    }

    /**
     * Fetch Content descendants
     */
    public descendants = (id: string|number, options?: CDNContentDescendantsOptions) => {
        return this.makeRequest(Endpoints.cdn.descendants(id, options))
    }

}

export {CDNClient}
