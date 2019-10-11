import {Client} from "../Client";
import {Endpoint} from "../Endpoint";
import {Endpoints} from "../Endpoints";
import {PageOptions} from "../RequestOptions";

export class MediaClient {

    constructor(
        private readonly client: Client
    ) {

    }


    private makeRequest = (endpoint: Endpoint, data?: any) => {
        return this.client.makeRequest(endpoint, data)
    }

    /**
     * Fetch root media
     */
    public root = () => {
        return this.makeRequest(Endpoints.media.root())
    }

    /**
     * Fetch media by id
     */
    public byId = (id: string|number) => {
        return this.makeRequest(Endpoints.media.byId(id))
    }

    /**
     * Fetch media children
     */
    public children = (id: string|number, options?: PageOptions) => {
        return this.makeRequest(Endpoints.media.children(id, options))
    }

}
