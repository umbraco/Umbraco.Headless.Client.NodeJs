export declare enum EndpointSource {
    CDN = 0,
    Media = 1,
    ContentManagement = 2
}
export declare class Endpoint<R = any> {
    readonly source: EndpointSource;
    readonly path: string;
    readonly urlParams: any;
    readonly method: string;
    readonly options?: any;
    constructor(source: EndpointSource, path: string, urlParams: any, method: string, options?: any);
    getPath: () => string;
}
