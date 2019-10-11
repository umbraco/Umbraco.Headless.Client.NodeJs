export interface ApiResponse<Response = any> {
    _links: any;
    _embedded: Response;
}
