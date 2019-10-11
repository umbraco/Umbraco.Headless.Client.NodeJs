import {CDNClient, ManagerClient, MediaClient} from "./Clients";
import {Endpoint} from "./Endpoint";
import {ApiRequest} from "./ApiRequest";

export interface ClientOptions {
    baseUrl?: string
    projectAlias: string
    language: string
}


export class Client {

    private _baseUrl: string = null

    constructor(public readonly options: ClientOptions) {

    }


    public readonly cdn = new CDNClient(this)
    public readonly media = new MediaClient(this)
    public readonly manager = new ManagerClient(this)


    /**
     * Makes request from and [Endpoint]
     */
    public makeRequest = <R>(endpoint: Endpoint<R>, data?: any) => {
        return new ApiRequest<R>(this, endpoint, data)
    }



    private makeUrl = () => {

    }

}
