export enum EndpointSource {

    CDN,
    Media,
    ContentManagement

}

/**
 * This class describes how and endpoint might will look,
 * it's not possible to change value
 */
export class Endpoint<R = any, Options = any> {

    constructor(
        public readonly source: EndpointSource,
        public readonly path: string,
        public readonly urlParams: any,
        public readonly method: string,
        public readonly options?: Options
    ) {

    }

    /**
     * Replace path with urlParams
     */
    getPath = () => {
        const keys = Object.keys(this.urlParams)
        if(keys.length === 0) {
            return this.path
        }

        let path = this.path
        keys.forEach(key => {
            const value = this.urlParams[key]

            const regEx = new RegExp(`{${key}}`)
            path = path.replace(regEx, value)

        })


        return path
    }


    static getURLAddress = (endpoint: Endpoint) => {
        let url = 'https://{API_TYPE}.umbraco.io' + endpoint.getPath()

        let apiType: string
        switch(endpoint.source) {
            case EndpointSource.CDN:
                apiType = "cdn"
                break

            case EndpointSource.ContentManagement:
                apiType = "api"
                break
        }

        url = url.replace("{API_TYPE}", apiType)

        return url

    }

}
