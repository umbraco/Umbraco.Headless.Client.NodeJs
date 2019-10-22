export declare enum EndpointSource {
    CDN = 0,
    Media = 1,
    ContentManagement = 2
}
/**
 * This class describes how and endpoint might will look,
 * it's not possible to change value
 */
export declare class Endpoint<R = any, Options = any> {
    readonly source: EndpointSource;
    readonly path: string;
    readonly urlParams: any;
    readonly method: string;
    readonly options?: Options;
    constructor(source: EndpointSource, path: string, urlParams: any, method: string, options?: Options);
    /**
     * Replace path with urlParams
     */
    getPath: () => string;
}
