export enum EndpointSource {

    CDN,
    Media,
    ContentManagement

}


export class Endpoint<R = any> {

    constructor(
        public readonly source: EndpointSource,
        public readonly path: string,
        public readonly urlParams: any,
        public readonly method: string,
        public readonly options?: any
    ) {

    }

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

}
