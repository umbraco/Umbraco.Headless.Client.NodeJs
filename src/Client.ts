import {CDNClient, ManagerClient, MediaClient} from "./Clients";
import {Endpoint} from "./Endpoint";
import {ApiRequest} from "./ApiRequest";

export interface ClientOptions {
    baseUrl?: string
    projectAlias: string
    language: string
}


/**
 * Headless Client for managing API calls to the Umbraco Headless API
 */
export class Client {

    private _baseUrl: string = null
    private _apiKey: string = null

    constructor(public readonly options: ClientOptions) {

    }

    /**
     * Get CDN Client for fetching content related objects
     */
    public readonly cdn = new CDNClient(this)

    /**
     * Get Media Client for fetching media related objects
     */
    public readonly media = new MediaClient(this)

    /**
     * Get Manager Client for managing content on Umbraco headless
     */
    public readonly manager = new ManagerClient(this)


    /**
     * Makes request from and [Endpoint]
     */
    public makeRequest = <R>(endpoint: Endpoint<R>, data?: any) => {
        return new ApiRequest<R>(this, endpoint, data)
    }



    private makeUrl = () => {

    }


    /**
     * Sets the API to be used.
     * @param apikey API Key
     */
    public setAPIKey = (apikey: string) => {
        this._apiKey = apikey
    }

    public getAPIKey = () => this._apiKey

}
