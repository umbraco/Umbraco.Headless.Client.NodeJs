import { ManagerClient } from "./Clients/index";
import { Endpoint } from "./Endpoint";
import { DeliveryClient } from "./Clients/DeliveryClient";
export interface ClientOptions {
    projectAlias: string;
    language?: string;
}
/**
 * Headless Client for managing API calls to the Umbraco Headless API
 */
export declare class Client {
    readonly options: ClientOptions;
    private _apiKey;
    constructor(options: ClientOptions);
    /**
     * Get Delivery client for fetching content and media from CDN
     */
    readonly delivery: DeliveryClient;
    /**
     * Get Manager Client for managing content on Umbraco headless
     */
    readonly manager: ManagerClient;
    /**
     * Makes request from and [Endpoint]
     */
    makeRequest: <R extends any>(endpoint: Endpoint<R, any>, data?: any) => Promise<any>;
    /**
     * Sets the API to be used.
     * @param apikey API Key
     */
    setAPIKey: (apikey: string) => void;
    getAPIKey: () => string | null;
    private getEmbeddedData;
    private getPagedData;
}
