import {Client} from "../Client";
import {Endpoints} from "../Endpoints";
import {Endpoint} from "../Endpoint";
import {DepthOptions, PageOptions} from "../RequestOptions";
import {ContentResponseElement} from "../Responses";



export class CDNClient {
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
    public byId = (id: string|number, options?: DepthOptions) => {
        return this.makeRequest(Endpoints.cdn.byId(id, options))
    }

    /**
     * Fetch Content by url
     */
    public byUrl = (url: string, options?: DepthOptions) => {
        return this.makeRequest(Endpoints.cdn.byUrl(url, options))
    }

    /**
     * Fetch Content children
     */
    public children = (id: string|number, options?: PageOptions) => {
        return this.makeRequest(Endpoints.cdn.children(id, options))
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
