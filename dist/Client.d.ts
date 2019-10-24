import { CDNClient, ManagerClient, MediaClient } from "./Clients";
import { Endpoint } from "./Endpoint";
import { ApiRequest } from "./ApiRequest";
export interface ClientOptions {
    baseUrl?: string;
    projectAlias: string;
    language: string;
}
/**
 * Headless Client for managing API calls to the Umbraco Headless API
 */
export declare class Client {
    readonly options: ClientOptions;
    private _apiKey;
    constructor(options: ClientOptions);
    /**
     * Get CDN Client for fetching content related objects
     */
    readonly cdn: CDNClient;
    /**
     * Get Media Client for fetching media related objects
     */
    readonly media: MediaClient;
    /**
     * Get Manager Client for managing content on Umbraco headless
     */
    readonly manager: ManagerClient;
    /**
     * Makes request from and [Endpoint]
     */
    makeRequest: <R>(endpoint: Endpoint<R, any>, data?: any) => ApiRequest<R>;
    /**
     * Sets the API to be used.
     * @param apikey API Key
     */
    setAPIKey: (apikey: string) => void;
    getAPIKey: () => string;
}
