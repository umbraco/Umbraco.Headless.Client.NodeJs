import { ManagementClient, DeliveryClient} from "./Clients";
import {Endpoint} from "./Endpoint";
import {ApiRequest} from "./ApiRequest";

export interface ClientOptions {
    projectAlias: string
    language?: string
}


/**
 * Headless Client for managing API calls to the Umbraco Headless API
 */
export class Client {

    private _apiKey: string|null = null

    constructor(public readonly options: ClientOptions) {

    }

    /**
     * Get Delivery client for fetching content and media from CDN
     */
    public readonly delivery = new DeliveryClient(this)

    /**
     * Get Manager Client for managing content on Umbraco headless
     */
    public readonly management = new ManagementClient(this)


    /**
     * Makes request from and [Endpoint]
     */
    public makeRequest = async <R extends any>(endpoint: Endpoint<R>, data?: any): Promise<R> => {


        const response = await new ApiRequest<R>(this, endpoint, data).promise()
        const items = this.getEmbeddedData(response)
        const pageData = this.getPagedData(response)
        

        if(pageData) {
            return {
                ...pageData,
                items
            }
        } else if (!pageData && items) {
            return items
        } else {
            return response
        }
        

        
    }


    /**
     * Sets the API to be used.
     * @param apikey API Key
     */
    public setAPIKey = (apikey: string) => {
        this._apiKey = apikey
    }

    public getAPIKey = () => this._apiKey

    private getEmbeddedData = (response: any) => {
        if(response.hasOwnProperty('_embedded')) {
            const keys = Object.keys(response._embedded)
            const keyCount = keys.length
            if(keyCount === 1) {
                const key = keys[0]
                return response._embedded[key]
            }
        }

        return null
    }

    private getPagedData = (response: any) => {
        const lookForProps = ["_totalItems", "_totalPages", "_page", "_pageSize"]
        const keys = Object.keys(response)

        for(let i=0;i<lookForProps.length;i++) {
            const needle = lookForProps[i]
            if (keys.indexOf(needle) === -1) return null
        }

        const object: any = {}
        lookForProps.forEach(key => {
            object[key.replace(/^_/, '')] = response[key]
        })

        return object



    }

}
