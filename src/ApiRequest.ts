import {Endpoint, EndpointSource} from "./Endpoint";
import {Client} from "./Client";
import fetch, {RequestInit} from "node-fetch";


const HOSTNAME = 's1.umbraco.io'

export class ApiRequest<R = any> {



    constructor(
        private client: Client,
        public endpoint: Endpoint,
        public data?: any
    ) {}





    public promise = () => {
        const projectAlias = this.client.options.projectAlias
        let url = `https://${projectAlias}.${HOSTNAME}`

        switch (this.endpoint.source) {
            case EndpointSource.CDN:
                url += `/cdn`
        }

        url += this.endpoint.getPath()


        const requestInit: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json+hal;v=2',
                'umb-project-alias': projectAlias,
                'Accept-Language': this.client.options.language
            }
        }

        const method = this.endpoint.method.toLowerCase()
        if((method === "post" || method === 'put') && !!this.data) {
            requestInit.body = JSON.stringify(this.data)
        }


        return fetch(url, requestInit)
            .then(res => res.json() as Promise<R>)


    }


}
