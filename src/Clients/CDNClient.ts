import {Client} from "../Client";
import {Endpoints} from "../Endpoints";
import {Endpoint} from "../Endpoint";
import {DepthOptions, PageOptions} from "../RequestOptions";
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
    public root = <T extends ContentResponseElement>() => {
        return this.makeRequest(Endpoints.cdn.root<T>())
    }

    /**
     * Fetch Content by id
     */
    public byId = <T extends ContentResponseElement>(id: string|number, options?: DepthOptions) => {
        return this.makeRequest(Endpoints.cdn.byId<T>(id, options))
    }

    /**
     * Fetch Content by url
     */
    public byUrl =< T extends ContentResponseElement>(url: string, options?: DepthOptions) => {
        return this.makeRequest(Endpoints.cdn.byUrl<T>(url, options))
    }

    /**
     * Fetch Content children
     */
    public children = <T extends ContentResponseElement>(id: string|number, options?: PageOptions) => {
        return this.makeRequest(Endpoints.cdn.children<T>(id, options))
    }

    /**
     * Fetch Content ancestors
     */
    public ancestors = (id: string|number) => {
        return this.makeRequest(Endpoints.cdn.ancestors(id))
    }

    /**
     * Fetch Content descendants
     */
    public descendants = (id: string|number, options?: PageOptions) => {
        return this.makeRequest(Endpoints.cdn.descendants(id, options))
    }

}

export {CDNClient}
